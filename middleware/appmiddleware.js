const express = require('express');
const app = express();

const reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send("<p style = 'color: red'>Please provide your age</p>");
    }
    else if(req.query.age<18){
        res.send("<p style='color:red'>you are not eligible to access</p>");
    }
    else{
        next();
    }
}
app.use(reqFilter);


app.use((req, res, next)=>{
    console.log('middleware called');
    next(); //used to call the next function(get, post)
})

app.get('/', (req, res)=>{
    console.log('this is home page');
})

app.get('/about', (req, res)=>{
    console.log('this is about page');
})

app.get('/contact', (req, res)=>{
    console.log('this is contact page');
})
app.get('/help', (req, res)=>{
    console.log('this is help page');
})
app.listen(3000);
console.log('server is listening...');