const express = require("express");
const propertyRouter = express.Router();

const {
  addProperty,
  editProperty,
  deleteProperty,
  getPropertyByID,
  handlePropertyMiddleware,
  getPropertyList,
  getPropertyTypes,
  validateID,
  getPropertiesByType,
  getPropertiesBestseller,
  getPropertyByLocation,
  validateProperty
} = require("../controllers/propertyControllers");

propertyRouter.get("/list", getPropertyList);

propertyRouter.get("/types", getPropertyTypes);

propertyRouter.get("/location/:location", getPropertyByLocation);

propertyRouter.get("/bestsellers", getPropertiesBestseller);

propertyRouter.post("/", validateProperty, addProperty);

propertyRouter.put("/:id", validateID, validateProperty, editProperty);

propertyRouter.delete("/:id", validateID, deleteProperty);

propertyRouter.get("/:id", validateID, getPropertyByID);

propertyRouter.get("/type/:type", getPropertiesByType);


module.exports = propertyRouter;
