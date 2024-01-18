const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModal = require('./modal/user')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/test")

app.post("/createUser",(req,res)=>{
    console.log("body",req.body)
    UserModal.create(req.body)
    .then(todos => req.json(todos))
    .catch(err => res.json(err))
})

app.get('/list',(req,res)=>{
    UserModal.find({})
    .then(todos => res.json(todos))
    .catch(err => res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id = req.params.id
    console.log("hffhfhfhfhfh",id)
    UserModal.findById({_id:id})
    .then(todos => res.json(todos))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id
    UserModal.findByIdAndUpdate({_id:id},
            {name:req.body.name,
            dob:req.body.dob,
            salary:req.body.salary,
            contact:req.body.contact,
            status:req.body.status,
            relevingDate:req.body.relevingDate,
            joiningDate:req.body.joiningDate
        })
    .then(todos => res.json(todos))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id
    UserModal.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('server running')
})