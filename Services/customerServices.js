const express = require("express");
const customerRouter = express.Router();

const { addCustomer,editCustomer, deleteCustomer, getCustomerByID, validateCustomer } = require('../controllers/customerControllers');
const { validateID } = require('../controllers/propertyControllers');

customerRouter.post("/", validateCustomer, addCustomer);

customerRouter.put("/:id", validateID, validateCustomer, editCustomer);

customerRouter.delete("/:id", validateID, deleteCustomer);

customerRouter.get("/:id", validateID, getCustomerByID);

module.exports = customerRouter;