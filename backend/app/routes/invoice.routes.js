module.exports = app => {
    const invoice = require("../controllers/invoice.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", invoice.create);
  
    // Retrieve all invoice
    router.get("/", invoice.findAll);
  
    // Retrieve all published invoice
    router.get("/published", invoice.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", invoice.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", invoice.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", invoice.delete);
  
    // Delete all invoice
    router.delete("/", invoice.deleteAll);
  
    app.use('/api/invoice', router);
  };
