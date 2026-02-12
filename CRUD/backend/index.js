const express = require('express');
const connectDB = require('./db');
const bookRouter = require('./routes/book.routes');

connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("hey");
});

app.use('/book', bookRouter);

app.listen(8000, ()=>{
    console.log("Running on 8000");
});
