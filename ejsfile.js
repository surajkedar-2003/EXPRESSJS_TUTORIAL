const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const bodyparser = require('body-parser');

app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
    res.render('pages/index.ejs', {msg:'I am suraj'})
})



//get the user data from object
const user = {
    firstname : 'suraj',
    lastname : 'kedar',
    country : 'india'
}

app.get('/user', (req, res)=>{
    res.render('pages/user.ejs', {data:user})
})



//addition of two numbers

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())
app.get('/form', (req, res)=>{
    res.render('pages/form.ejs')
})

app.post('/submit', (req, res)=>{
    let a = parseFloat(req.body.n1);
    let b = parseFloat(req.body.n2);
    let result = a+b;
    console.log(result);
    res.render('pages/success.ejs',{ans:result});
})


app.listen(3000);
console.log('server is listening...');