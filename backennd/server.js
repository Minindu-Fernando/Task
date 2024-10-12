const express = require('express')
const app = express()
app.get('/test',(req,res)=>{
    res.status(200).send("<h1>My App</h1>");
});

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("Server Running");
});
