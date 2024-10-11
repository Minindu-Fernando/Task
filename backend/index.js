const express = require("express");
const mysql = require("mysql2");  
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); 

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",  
    database: "student"  
});

connection.connect(err => {
    if (err) {
        console.error("Error connecting to the database:", err);
        throw err; 
    }
    console.log("Connected to the database");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
