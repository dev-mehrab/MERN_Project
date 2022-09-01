

require('dotenv').config();


const express = require('express');


const app = express();

app.use(express.json());



 app.get('/api/students/', (req, res) =>{
    console.log(' Get /api/student', req.query);
    res.send("Hello world");
})
app.post('/api/students', (req, res) =>{
    console.log(` Post /api/student`, req.body)
})
app.put('/api/students/:id', (req, res) =>{
    console.log(` Put /api/student:id` , req.params.id)
})
app.delete('/api/students/:id', (req, res) =>{
    console.log(` Delete /api/student:id` , req.params.id)
})
const port = process.env.port;
app.listen(port, ()=>{
    console.log('Thhe runing port is' , port );
})