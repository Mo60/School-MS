module.exports = app => {
    const medical = require("../controllers/medical.controller.js");
  
    var router = require("express").Router();
  
    // Create a new medical
    router.post("/", medical.create);
    router.post("/bulk", medical.createmany);
  
    // Retrieve all medical(s)
    router.get("/", medical.findAll);
  
    // Retrieve a single medical with id
    router.get("/:id", medical.findOne);
  
    // Update a medical with id
    router.put("/:id", medical.update);
  
    // Delete a medical with id
    router.delete("/:id", medical.delete);
  
    // Delete all medical(s)
    router.delete("/", medical.deleteAll);
  
    app.use('/api/medical', router);
  };
