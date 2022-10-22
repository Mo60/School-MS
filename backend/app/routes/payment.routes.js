module.exports = app => {
    const payment = require("../controllers/payment.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", payment.create);
  
    // Retrieve all payment
    router.get("/", payment.findAll);
  
    // Retrieve all published payment
    router.get("/published", payment.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", payment.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", payment.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", payment.delete);
  
    // Delete all payment
    router.delete("/", payment.deleteAll);
  
    app.use('/api/payment', router);
  };
