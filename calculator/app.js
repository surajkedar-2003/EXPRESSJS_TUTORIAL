const express = require('express');
const app = express();
const calc = require('./calculate.js')
const path = require('path');
const filepath = path.join(__dirname);

app.use(express.urlencoded({extended:true}));
app.get('/', (req, res)=>{
    res.sendFile(`${filepath}/index.html`);
})

app.post('/submit', (req, res)=>{
    const a = parseFloat(req.body.fno);
    const b = parseFloat(req.body.sno);
    const optr = req.body.operator;
    console.log(a);
    console.log(b);
    console.log(optr);
   if (optr == 'addition') {
    console.log(a+b);
   } 
   else if(optr == 'subtraction') {
    
    console.log(a-b);
   }
   else if(optr == 'multiplication'){
    console.log(a*b);
   }
   else{
    console.log(a/b);
   }

    res.sendFile(`${filepath}/success.html`);
})

app.listen(3400)
console.log('server is running...');