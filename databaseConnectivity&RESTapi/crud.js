const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const StudentModel = require('./student');

//connection is used to create database and connect to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/university");

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get('/', (req, res)=>{
    res.send('hello world');
})

app.post('/create', async (req, res)=>{
    try{
        const data = new StudentModel(req.body);
        await data.save();
        res.status(201).send(data);
    }catch(err){
        console.log(err);
    }
})

//to get the records by specific id
app.get('/student/:id', async (req, res)=>{
    try{
        const info = await StudentModel.findById(req.params.id);
        res.send(info);
    }catch(err){
        console.log(err);
    }
    
})

//to get all records
app.get('/list', async (req, res)=>{
    try{
        const list = await StudentModel.find();
        res.send(list);
    }catch(err){
        console.log(err);
    }
})
//delete the record
app.delete('/delete/:id', async(req, res)=>{
    try{
        const del = await StudentModel.findByIdAndDelete(req.params.id);
        res.send(del);
    }catch(err){
        res.status(404).send({message:'student not found'});
    }
})

//update records
app.put("/update/:id", async(req, res)=>{
    try{
        const upd = await StudentModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    }catch(err){
        res.status(404).send({message:"student not found"});
    }
})
app.listen(3000);
console.log('server is listening...');
