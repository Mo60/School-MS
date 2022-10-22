module.exports = app => {
    const parent = require("../controllers/parent.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", parent.create);
  
    // Retrieve all parent
    router.get("/", parent.findAll);
  
    // Retrieve all published parent
    router.get("/published", parent.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", parent.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", parent.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", parent.delete);
  
    // Delete all parent
    router.delete("/", parent.deleteAll);
  
    app.use('/api/parent', router);
  };
