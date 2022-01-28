//npm module imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//custom module imports and port
const { mongoose, createCustomer, Customer } = require("./mongodb.js");
const PORT = 8000;

app.use(bodyParser.json());


app.post("/customer", function (req, res) {
  const customerData = req.body;
  createCustomer(customerData, function (err, data) {
    console.log(data);
    res.json({message: "successfully added"});
  });
});

app.put("/customer/:id", function (req, res) {
  let ObjectId = mongoose.Types.ObjectId;
  Customer.findOneAndUpdate(
    { _id: ObjectId(req.params.id) },
    req.body,
    { new: true },
    function (err, customer) {
      if (err) return console.log(err);
      res.json({message: "successfully updated"});
    }
  );
});

app.delete("/customer/:id", function (req, res) {
  let ObjectId = mongoose.Types.ObjectId;
  Customer.deleteOne({ _id: ObjectId(req.params.id) }, function (err) {
    if(err) console.log(err);
    res.json({message: "successfully deleted"});
  });
});

app.listen(PORT, function () {
  console.log(PORT);
});
