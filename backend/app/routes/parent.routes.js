module.exports = app => {
    const parent = require("../controllers/parent.controller.js");
  
    var router = require("express").Router();
  
    // Create a new parent
    router.post("/", parent.create);
    router.post("/bulk", parent.createmany);
  
    // Retrieve all parent
    router.get("/", parent.findAll);
  
    // Retrieve a single parent with id
    router.get("/:id", parent.findOne);
  
    // Update a parent with id
    router.put("/:id", parent.update);
  
    // Delete a parent with id
    router.delete("/:id", parent.delete);
  
    // Delete all parent
    router.delete("/", parent.deleteAll);
  
    app.use('/api/parent', router);
  };
