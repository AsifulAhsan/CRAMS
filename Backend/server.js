//const express = require("express")
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const Port=process.env.Port || 4000;
const URI = process.env.MongoDBURI;

const app = express()
//connect to MongoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDB")    
} catch (error) {
    console.log("Error=", error);
}



app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`)
})