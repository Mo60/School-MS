module.exports = app => {
    const invoice = require("../controllers/invoice.controller.js");
  
    var router = require("express").Router();
  
    // Create a new invoice
    router.post("/", invoice.create);
  
    // Retrieve all invoice
    router.get("/", invoice.findAll);
  
    // Retrieve a single invoice with id
    router.get("/:id", invoice.findOne);
  
    // Update a invoice with id
    router.put("/:id", invoice.update);
  
    // Delete a invoice with id
    router.delete("/:id", invoice.delete);
  
    // Delete all invoice
    router.delete("/", invoice.deleteAll);
  
    app.use('/api/invoice', router);
  };
