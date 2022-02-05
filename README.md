# Rest-Inn REST API App
https://mysterious-caverns-77924.herokuapp.com/customer
## _The Last Markdown Editor, Ever_
Rest-Inn is a new company that allows visitors to find and book vacation rentals, cabins, beach houses and unique homes, 
around the world, specifically for short-term rental. 
## API
Allows mangaing Rest-Inn’s customers and properties. All HTTP requests are handled using Express.js framework based on RESTful API 
Architecture style.

#### Endpoints
All requests and responses are handled in JSON format with the header status codes.
**Example:**
```javascript
res.status(200).json(customer);
```
All errors are handled by specified middleware callbacks in http request functions 
**Example:**

```javascript
propertyRouter.post("/", validateProperty, addProperty);

exports.validateProperty = async function (req, res, next) {
  try{
    await Property.validate(req.body);
  } catch(err){
    res.status(404).json({ error: "Can't validate" });
  }
  next();
}
```
> This function validates the property scheme if required fields are entered.
> Then, next() calls allows moving to other callback.


This website is divided into two mini apps handled by express feature 'Router()'. First one is for Customers endpoints, other one is for Properties endpoints.
```javascript
const customerRouter = require("./services/customerServices.js");
const propertyRouter = require("./services/propertyServices.js");
app.use('/customer', customerRouter);
app.use('/property', propertyRouter);
```

### Customer Endpoints 

```javascript
// add customer with /customer POST request 
customerRouter.post("/", validateCustomer, addCustomer);
// edit customer with /customer/id PUT request 
customerRouter.put("/:id", validateID, validateCustomer, editCustomer);
// delete customer with /customer/id DELETE request 
customerRouter.delete("/:id", validateID, deleteCustomer);
// get customer buy id with /customer/id GET request 
customerRouter.get("/:id", validateID, getCustomerByID);
```
### Property Endpoints 

```javascript
// get list of properties with /property/list GET request
propertyRouter.get("/list", getPropertyList);
// get types of properties with /property/types GET request
propertyRouter.get("/types", getPropertyTypes);
// get property by location with /location/:location GET request
propertyRouter.get("/location/:location", getPropertyByLocation);
// get property by bestseller bool with /property/bestsellers GET request
propertyRouter.get("/bestsellers", getPropertiesBestseller);
// add property with /property POST request 
propertyRouter.post("/", validateProperty, addProperty);
// edit property with /property/id PUT request
propertyRouter.put("/:id", validateID, validateProperty, editProperty);
// delete property with /property/id delete request
propertyRouter.delete("/:id", validateID, deleteProperty);
// get property by id with /property/id GET request
propertyRouter.get("/:id", validateID, getPropertyByID);
// get property by type with /property/type/:type GET request
propertyRouter.get("/type/:type", getPropertiesByType);
```

## Schemas
I have used mongoose for working with MongoDB. Mongoose requires declaring of schemas in order to work with models and validation purposes.
### Customer schema

```javascript
const customerSchema = new Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  phone_numbers: [String, String]
});
```
### Property schema

```javascript
const propertySchema = new Schema({
  title: {type: String, required: true},
  rental_price: {type: String, required: true},
  description: {type: String, required: true},
  type: {type: String, required: true},
  house_rules: [String],
  amenities: {type: [String], required: true },
  location: {type: String, required: true},
  isBestseller: {type: Boolean, required: true},
  photos: String
});
```
