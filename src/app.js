const express = require('express');
const app = express()
const errorHandler = require('./_helpers/error_handler');

require('dotenv').config()

var port = process.env.PORT || 8080;

app.use(express.static('src/public'))

//Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use("/", require('./routes/index'))
app.use("/api/", require("./routes/api_routes"))
app.use("/mock/", require("./routes/mock_routes"))

app.use(errorHandler); // global error handler

app.listen(port, () => console.log(`Server listening on port: ${port}`));