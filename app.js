const bodyParser = require('body-parser');
const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const filepath = path.join(__dirname);

app.get('/', (req, res)=>{
    res.sendFile(`${filepath}/home.html`);
})

app.use(express.urlencoded({extended:true}));//middleware
app.use(bodyParser.urlencoded({extended:true}))//middleware use to send the data in json format
app.use(bodyParser.json());
app.post('/submit', (req, res)=>{
    console.log(req.body.uname);
    console.log(req.body.email);
    console.log(req.body.pass);
    res.sendFile(`${filepath}/success.html`);
})

app.listen(3000);
console.log('server is listening....');