module.exports = app => {
    const Class = require("../controllers/class.controller.js");
  
    var router = require("express").Router();
  
    // Create a new class
    router.post("/", Class.create);
  
    // Retrieve all class
    router.get("/", Class.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", Class.findOne);
  
    // Update a class with id
    router.put("/:id", Class.update);
  
    // Delete a class with id
    router.delete("/:id", Class.delete);
  
    // Delete all class
    router.delete("/", Class.deleteAll);
  
    app.use('/api/class', router);
  };
