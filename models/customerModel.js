const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  phone_numbers: [String, String]
});

const Customer = mongoose.model("Customer", customerSchema, "customer");

module.exports = {
  createCustomer: function (cust, callback,next) {
    let newCust = new Customer(cust);
    newCust.save(function (err, data) {
      if (err) return next(err);
      console.log(data)
      return callback(data);
    });
  },
  Customer,
};
