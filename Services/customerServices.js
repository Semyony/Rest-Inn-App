const express = require("express");
const customerRouter = express.Router();

const { addCustomer,editCustomer, deleteCustomer, getCustomerByID, cannotFindCustomer } = require('../controllers/customerControllers');
const { validateID } = require('../controllers/propertyControllers')

customerRouter.use("/:id", validateID, cannotFindCustomer);

customerRouter.post("/", addCustomer);

customerRouter.put("/:id", validateID, editCustomer);

customerRouter.delete("/:id", validateID, deleteCustomer);

customerRouter.get("/:id", validateID, getCustomerByID);

module.exports = customerRouter;