require('express-async-errors');
const connect = require('./src/db/connect')
const express = require("express");
const app = express();


const taskRoutes = require('./src/routes/tasks');
const errorHandler = require('./src/middleware/errorHandler')


app.use(express.json());


app.get("/", (req, res) => {
    res.send("Sample");
});


//Routes
app.use('/api/v1/tasks', taskRoutes);


//Error handler
app.use(errorHandler);

const start = async () => {
    try {
        await connect("ss");
        console.log("Connected to DB");
        app.listen(3000, () => console.log("Listening on 300"));
    } catch (error) {
        console.log(error);
    }
}

start();


