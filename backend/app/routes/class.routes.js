module.exports = app => {
    const class = require("../controllers/class.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", class.create);
  
    // Retrieve all class
    router.get("/", class.findAll);
  
    // Retrieve all published class
    router.get("/published", class.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", class.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", class.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", class.delete);
  
    // Delete all class
    router.delete("/", class.deleteAll);
  
    app.use('/api/class', router);
  };
