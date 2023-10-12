const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const cors = require('cors')
const app = express()
//const OpenAIapi = require("openai")
//const Configuration = require("openai")
/*import OpenAIapi from "openai";
import {config} from "dotenv";
config()
import express from "express";
import bodyParser from "body-parser";
import https from 'https';
import cors from "cors";*/

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cors())
app.use(bodyParser.json())

app.get('/sendEmail', (req,res)=>{
    //res.sendFile(__dirname + "/index.html") //display on the browse web page
    const email = {
        email:''
    }
    res.send(email)
})

app.post('/sendEmail' , (req,res)=>{
    const email = req.body.email

    var api_key = 'c2f78883d5a33c5a2c84020e370ce197-c30053db-51a6393a';
    var domain = 'sandbox2b04097476d841a38b2f8648b5e93afe.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    
    var data = {
    from: 'SIT313 <wenweizhou0@gmail.com>',
    to: email,
    subject: 'SIT313 project',
    text: 'Welcome!'
    };

    console.log(data)
    
    mailgun.messages().send(data, function (error, body) {
        if(error){
            console.log(error);
        }
    console.log(body);
    });
    
              
})

app.get('/login', (req,res)=>{
    const user = {
        username:"Deakin",
        password:"123"
    }
    res.send(user)
})



app.post('/login' , (req,res)=>{
    const password = req.body.password
    const username = req.body.username
    const data = {
            email_address : username,
            password : password
        }

          console.log(data)

})

/*const configuration = new Configuration({
    organization: "org-CMdBrDyhS7AYNLBllVzJGK9m",
    apiKey: "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"
});*/

/*const openai = new OpenAIapi({
    apiKey: process.env.OPENAI_API_KEY
});

app.get('/chatgpt', (req,res)=>{
    const resume = {
        resume:''
    }
    res.send(resume)
})

app.post("/chatgpt", async(req,res) => {
    const resume = req.body.resume;
    
    const result = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
        {
            role: "system",
            content: "You are a EbereGPT. You can help with graphic design tasks",
        },
        resume,
    ],
    });

    res.json({
        output: result.data.choices[0].message,
    })
});*/

const generateCode = () => Math.random().toString(36).substring(2, 12);
let code = generateCode();

app.post("/sendCode", (req, res) => {
    const email = req.body.email

    var api_key = 'c2f78883d5a33c5a2c84020e370ce197-c30053db-51a6393a';
    var domain = 'sandbox2b04097476d841a38b2f8648b5e93afe.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    
    var data = {
    from: 'SIT313 <wenweizhou0@gmail.com>',
    to: email,
    subject: 'SIT313 project',
    text: 'verify code: ' + code,
    };

    console.log(data)
    
    mailgun.messages().send(data, function (error, body) {
        if(error){
            console.log(error);
        }
    console.log(body);
    });
})


app.post("/verification", (req, res) => {

    

    if (code === req.body.code) {
        return res.json({ message: "You're verified successfully" });
    }
    res.json({
        error_message: "Incorrect credentials",
    });
});

app.listen(process.env.PORT || 3007, function (request, response){
    console.log("Server is running on port 3007")
} )