const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.post("/", async (req, res) => {
  try {
    const Products = await Product.create(req.body);
    return res.status(200).send(Products);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const Products = await Product.find().lean().exec();
    return res.status(200).send(Products);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
    try {
      const prod = await Product.findById(req.params.id).lean().exec();
  
      if (prod) {
        return res.send(prod);
      } else {
        return res.status(404).send({ message: "Product not found" });
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  // met + routeusers/${variable} and the name of  => patch /variable is id
  router.patch("/:id", async (req, res) => {
    try {
      const prod = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      res.status(201).send(prod);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  // met + route => delete /users/${variable} and the name of variable is id
  router.delete("/:id", async (req, res) => {
    try {
      const prod = await Product.findByIdAndDelete(req.params.id).lean().exec();
  
      res.send(prod);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

module.exports = router;
