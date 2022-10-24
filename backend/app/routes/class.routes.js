module.exports = app => {
    const class = require("../controllers/class.controller.js");
  
    var router = require("express").Router();
  
    // Create a new class
    router.post("/", class.create);
  
    // Retrieve all class
    router.get("/", class.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", class.findOne);
  
    // Update a class with id
    router.put("/:id", class.update);
  
    // Delete a class with id
    router.delete("/:id", class.delete);
  
    // Delete all class
    router.delete("/", class.deleteAll);
  
    app.use('/api/class', router);
  };
