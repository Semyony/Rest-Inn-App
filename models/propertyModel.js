const mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({
  title: String,
  rental_price: String,
  description: String,
  type: String,
  house_rules: [String],
  amenities: {type: [String], required: true },
  location: {type: String, required: true},
  isBestseller: {type: Boolean, required: true},
  photos: String
});

const Property = mongoose.model("Property", propertySchema, "property");

module.exports = {
  createProperty: function (property, callback, next) {
    let newProperty = new Property(property);
    newProperty.save(function (err, data) {
      if (err) return next(err);
      console.log(data)
      return callback(data);
    });
  },
  Property,
};
