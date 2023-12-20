// import express from "express";
// import dotenv from "dotenv";
const express=require('express');
const dotenv=require('dotenv');
const conn=require('./db/config.js');
// import router from  "./router.js";
const router=require('./router.js');
// import cors from 'cors'
const cors=require('cors');
dotenv.config();

const app = express();
app.use(cors({orgin:'http://localhost:3000'}))
app.use("/", express.static("./static"));
app.use(express.json());
app.use("/api", router);

conn().then(() => {
    app.listen(process.env.PORT, error => {
        if(error) {
            console.log(error);
            return;
        }
        console.log("Server started");
    });
})
.catch(error => {
    console.log(error);
})