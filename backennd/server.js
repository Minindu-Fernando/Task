const express = require("express");
const morgan = require("morgan");
const app = express();
const dotenv = require('dotenv');
const mySqlPool = require("./config/db");

dotenv.config()

app.use(morgan("dev"));
app.use(morgan("dev"));

app.use("/api/v1/student", require("./routes/studentRoutes"));
app.get('/test',(req,res)=>{
    res.status(200).send("<h1>Wellcome</h1>");
});

const PORT = process.env.PORT || 8000;

mySqlPool.query('SELECT 1').then(()=>{
console.log('MySQL DB Connected')

app.listen(PORT, ()=>{
    console.log(`Server Running on port ${process.env.PORT}`);
});
}).catch((error)=>{
console.log(error)
})