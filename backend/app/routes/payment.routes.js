module.exports = app => {
    const payment = require("../controllers/payment.controller.js");
  
    var router = require("express").Router();
  
    // Create a new payment
    router.post("/", payment.create);
  
    // Retrieve all payment
    router.get("/", payment.findAll);
  
    // Retrieve a single payment with id
    router.get("/:id", payment.findOne);
  
    // Update a payment with id
    router.put("/:id", payment.update);
  
    // Delete a payment with id
    router.delete("/:id", payment.delete);
  
    // Delete all payment
    router.delete("/", payment.deleteAll);
  
    app.use('/api/payment', router);
  };
