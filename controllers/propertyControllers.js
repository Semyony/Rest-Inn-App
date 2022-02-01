const mongoose = require("mongoose");

const { createProperty, Property } = require("../models/propertyModel.js");

exports.addProperty = function (req, res, next) {
  const propertyData = req.body;

  createProperty(
    propertyData,
    function (data) {
      res.status(200).json({ message: "successfully added" });
    },
    next
  );
};

exports.editProperty = function (req, res) {
  let ObjectId = mongoose.Types.ObjectId;
  Property.findOneAndUpdate(
    { _id: ObjectId(req.params.id) },
    req.body,
    { new: true },
    function (err, updated) {
      if (err) return next(err);
      res.status(200).json(updated);
    }
  );
};

exports.deleteProperty = function (req, res) {
  let ObjectId = mongoose.Types.ObjectId;
  Property.deleteOne({ _id: ObjectId(req.params.id) }, function (err) {
    if (err) return next(err);
    res.status(200).json({ message: "successfully deleted" });
  });
};

exports.getPropertyByID = function (req, res, next) {
  let ObjectId = mongoose.Types.ObjectId;
  console.log(2);
  Property.findOne({ _id: ObjectId(req.params.id) }, function (err, property) {
    if (err) return next(err);
    res.status(200).json(property);
  });
};

exports.handlePropertyMiddleware = function (req, res, next) {
  
  next();
};

exports.validateID = function (req, res, next) {
  console.log(1)
  if (req.params.id.length != 24 || !req.params.id.length) {
    res.status(404).json({ error: "Can't find" });
  }
  next();
};

exports.getPropertyList = function (req, res) {
  Property.find(function (err, results) {
    if (err) return next(err);
    console.log(results);
    res.status(200).json(results);
  });
};

exports.getPropertyTypes = function (req, res) {
  Property.find(function (err, results) {
    if (err) return next(err);
    let arrayTypes = [];
    results.map((r) => arrayTypes.push(r.type));
    let uniqueTypes = [...new Set(arrayTypes)];
    res.status(200).json(uniqueTypes);
  });
};

exports.getPropertiesByType = function(req, res) {
  Property.find({ type: req.params.type }, function (err, properties) {
    if (err) return next(err);
    res.status(200).json(properties);
  });
};

exports.getPropertiesBestseller = function (req, res){
  Property.find({ isBestseller: true }, function (err, properties) {
    if (err) return next(err);
    res.status(200).json(properties);
  });
};

exports.getPropertyByLocation = function (req, res){
  Property.find({ location: req.params.location }, function (err, properties) {
    if (err) return next(err);
    res.status(200).json(properties);
  });
};

exports.validateProperty = async function (req, res, next) {
  try{
    await Property.validate(req.body);
  } catch(err){
    res.status(404).json({ error: "Can't validate" });
  }
  
  next();
}