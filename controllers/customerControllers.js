const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const { createCustomer, Customer } = require("../models/customerModel.js");

exports.addCustomer = function (req, res,next) {
  const customerData = req.body;

  customerData.password = bcrypt.hashSync(req.body.password, 5);
  createCustomer(customerData, function (data) {
    res.status(200).json({ message: "successfully added" });
  }, next); 
};

exports.editCustomer = function (req, res) {
  let ObjectId = mongoose.Types.ObjectId;

  let crypted_pass = bcrypt.hashSync(req.body.password, 5);

  Customer.findOneAndUpdate(
    { _id: ObjectId(req.params.id) },
    {
      $set: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: crypted_pass,
        phone_numbers: req.body.phone_numbers,
      },
    },
    { new: true },
    function (err, updated) {
      if (err) return next(err);
      res.status(200).json(updated);
    }
  );
};

exports.deleteCustomer = function (req, res) {
  let ObjectId = mongoose.Types.ObjectId;
  Customer.deleteOne({ _id: ObjectId(req.params.id) }, function (err) {
    if (err) return next(err);
    res.status(200).json({ message: "successfully deleted" });
  });
};

exports.getCustomerByID = function (req, res, next) {
  let ObjectId = mongoose.Types.ObjectId;
  Customer.findOne({ _id: ObjectId(req.params.id) }, function (err, customer) {
    if (err) return next(err);
    res.status(200).json(customer);
  });
};

exports.cannotFindCustomer = function (req, res, next) {
  if (req.params.id.length != 24 || !req.params.id.length) {
    res.status(404).json({ error: "Can't find" });
  }
  next();
};

exports.validateCustomer = async function (req, res, next) {
  try{
    await Customer.validate(req.body);
  } catch(err){
    res.status(404).json({ error: "Can't validate" });
  }

  next();
}


