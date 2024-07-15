const dbConnect = require('./database');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/user.html`);
});

app.post('/submit', (req, res)=>{
    const uname = req.body.uname;
    const email = req.body.name;
    const pass = req.body.pass;
    console.log('Request body:', req.body); 
    console.log(email);
    insert(uname, email, pass);
    console.log('document inserted successfully..');
    res.send('details are inserted...')
})

async function insert(uname, email, pass){
    const db = await dbConnect();
    let result = await db.insertOne({uname:uname, email:email, password:pass});
    console.log(result);
}

app.listen(3000)
console.log('server is listening..');