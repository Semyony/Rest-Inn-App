//npm module imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();

//custom module imports and port
const customerRouter = require("./Services/customerServices.js");
const propertyRouter = require("./Services/propertyServices.js");

const PORT = process.env.PORT || 5000;
connect();

app.use(bodyParser.json());
app.use('/customer', customerRouter);
app.use('/property', propertyRouter);

app.listen(PORT, function () {
  console.log(PORT);
});

function connect() {
  mongoose.connect(
    `mongodb+srv://semy:${process.env.MONGO_PASSWORD}@cluster0.buq2s.mongodb.net/restinnapp?retryWrites=true&w=majority`, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("mongoose is connected")
  );
}
