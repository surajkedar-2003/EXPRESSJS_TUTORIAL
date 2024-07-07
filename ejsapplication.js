const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('pages/home');
})

const courses = [
    {
        id:101,
        cname: 'web',
        duration:"3 months",
        fees: 20000
    },
    {
        id:102,
        cname: 'mern stack',
        duration:"4 months",
        fees: 30000
    },
    {
        id:103,
        cname: 'java',
        duration:"4 months",
        fees: 45000
    },
    {
        id:104,
        cname: 'testing',
        duration:"5 months",
        fees: 35000
    }
]

//add the courses page 

app.get('/courses', (req, res)=>{
    res.render('pages/course', {data:courses})
})

app.listen(3000);
console.log('server is listening...');