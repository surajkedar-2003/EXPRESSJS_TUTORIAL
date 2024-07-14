const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
const validate = (req, res, next)=>{
    const name = req.body.uname;
    const mno = req.body.mno;
    const age = req.body.age;
    const pattern = '(^[7896]{1,1})+([0,9]{9,9})$'
    if(!name || !mno || !age){
        res.send('username, mobile No.and age is required');
    }else if(!(age>=18 && age<=50)){
        res.send('age is incorrect');
    }else if(!mno.match(pattern)){
        res.send('invalid mobile number');
    }else{
        next();
    }
}

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/public/form.html`);
})

app.post('/submit',validate, (req, res)=>{
    res.send('welcome user');
})
app.listen(3000);
console.log('server is listening...');