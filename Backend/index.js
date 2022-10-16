const express= require('express');
const mongoose= require('mongoose')
const app= express();

const connectDb= async()=>{
    mongoose.connect('mongodb://localhost:27017/e-comm');
    const productSchema= new mongoose.Schema({});
    const product= mongoose.model('users',productSchema)
    const data= await product.find();
    console.log(data)
}
connectDb()
 
app.listen(4000)