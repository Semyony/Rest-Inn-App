const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect(
  "mongodb+srv://semy:123456s@cluster0.buq2s.mongodb.net/restinnapp?retryWrites=true&w=majority"
);

const Conn = mongoose.connection;

const customerSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  phone_numbers: [String, String],
});

const Customer = mongoose.model("Customer", customerSchema, "customer");

module.exports = {
  mongoose,
  createCustomer: function (cust, callback) {
    let newCust = new Customer(cust);
    newCust.save(function (err, data) {
      if (err) throw err;
      console.log(data)
      return callback(data);
    });
  },
  Customer,
};
