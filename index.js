const express = require("express");

const connect = require("./src/configs/db")
const app = express()

require("dotenv").config();
var cors = require("cors");

// Port details and connect function
const port = process.env.PORT || 5399;


app.use(express.json())
app.use(cors());

const userController = require('./src/controllers/user.controller')
const productController = require('./src/controllers/product.controller')
const {login, register} = require('./src/controllers/auth.controller')

app.use('/users', userController)
app.use('/products', productController)

app.post('/login', login)
app.post('/register', register)


app.listen(port, async() =>{
    try{
        await connect();
        console.log("listening on port 5399")
    } catch(err){
        console.log(err.message)
    }
})

