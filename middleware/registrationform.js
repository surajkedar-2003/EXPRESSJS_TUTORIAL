const express = require('express')
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
const validation = (req, res, next)=>{
    const name = req.body.uname;
    const email = req.body.email;
    const pass = req.body.pass;
    const address = req.body.address;
    const emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
    const passPattern = `^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$`;

    // ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$

    if(!name || !email || !pass || !address){
        res.send('add all details');
    }
    else if(!email.match(emailPattern)){
        res.send('invalid email')
    }
    else if(!pass.match(passPattern)){
        res.send('invalid password');
    }else{
        next();
    }
}
app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/public/registrationform.html`);
})

app.post('/submit',validation, (req, res)=>{
    res.send('<p style="color:red">welcome user</p>');
})
app.listen(3000);
console.log('server is listening...');