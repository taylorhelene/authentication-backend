const express = require('express');
const app = express();
const cloudinary = require('cloudinary').v2
const bodyParser = require('body-parser');
require('dotenv').config()
const path= require('path')


app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });
app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/images/using.png");
})

app.get("/:id/:name",(request,response)=>{
    response.send("ff"+ request.params.id+request.params.name)
})

app.post("/upload-image", (request, response) => {
    const data = {
        image: request.body.image,
      }
  
      // upload image here
      cloudinary.uploader.upload(data.image)
      .then((result)=>{
        response.status(200).send({
            message: "success",
            result,
        })
      }

      ).catch((error)=>{
        response.status(500).send({
            message : "error",
            error
        })
      })
});

module.exports = app;