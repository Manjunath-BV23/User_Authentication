const {default:mongoose} = require('mongoose')

// const url = "mongodb+srv://Mohammad:Mohammad1234@user-cluster.kgiwc6b.mongodb.net/UsersDB";
const connect = () =>{
    return mongoose.connect("mongodb+srv://manjunath:manju123@cluster0.kmbjv.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = connect;
