module.exports = app => {
    const enrollment = require("../controllers/enrollment.controller.js");
  
    var router = require("express").Router();
  
    // Create a new enrollment
    router.post("/", enrollment.create);
  
    // Retrieve all enrollment
    router.get("/", enrollment.findAll);  
    
    // Retrieve a single enrollment with id
    router.get("/:id", enrollment.findOne);
  
    // Update a enrollment with id
    router.put("/:id", enrollment.update);
  
    // Delete a enrollment with id
    router.delete("/:id", enrollment.delete);
  
    // Delete all enrollment
    router.delete("/", enrollment.deleteAll);
  
    app.use('/api/enrollment', router);
  };
