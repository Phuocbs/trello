// import express from "express";

const express = require("express");
const app =express();
const hostname ="localhost";
const port     =8080;

app.get("/",(req,res) =>{
    res.send('<h1> Hello')
})
app.listen(port, hostname ,()=>{
    console.log(`Hello local host:${hostname}`,`port:${port}`)
})