const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const ejs  = require('ejs');

app.set('view engine', 'ejs');

//bodyparser as middleware
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());

//object of posts

const posts = [
    {
        title: 'Introduction to the Theory of Computation',
        author: 'Michael Sipser',
        content: 'A comprehensive guide to the theoretical foundations of computer science, including automata theory, computability, and complexity.',
        pubyear: '1997'
    },
    {
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin',
        content: 'A practical guide on writing clean, readable, and maintainable code.',
        pubyear: '2008'
    },
    {
        title: 'Artificial Intelligence: A Modern Approach',
        author: 'Stuart Russell and Peter Norvig',
        content: 'A leading textbook on artificial intelligence, covering a wide range of AI concepts and applications.',
        pubyear: '1995'
    },
    {
        title: 'The Pragmatic Programmer: Your Journey to Mastery',
        author: 'Andrew Hunt and David Thomas',
        content: ' A guide to becoming a better programmer through pragmatic approaches to software development.',
        pubyear: '1999'
    },
    {
        title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
        author: 'Erich Gamma',
        content: ' A classic book that introduces design patterns, offering solutions to common software design problems.',
        pubyear: '1994'
    }
]

app.get('/article', (req, res)=>{
    res.render('pages/article', {data:posts})
})

app.listen(3000);
console.log('server is listening...');