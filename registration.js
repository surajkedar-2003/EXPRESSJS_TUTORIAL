const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/registration', (req, res)=>{
    res.render('pages/registration');
})
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.post('/submit', (req, res)=>{
    const info = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        age: req.body.age,
        address:req.body.address,
        city: req.body.city,
        hobbies : req.body.hobbies
    }
    res.render('pages/submit', {data:info});
})

app.listen(3000);
console.log('server is listening...');