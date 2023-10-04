const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const cors = require('cors')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    //res.sendFile(__dirname + "/index.html") //display on the browse web page
    const email = {
        email:''
    }
    res.send(email)
})

app.post('/' , (req,res)=>{
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

app.listen(3007, function (request, response){
    console.log("Server is running on port 3007")
} )