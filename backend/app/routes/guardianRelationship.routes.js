module.exports = app => {
    const guardianRelationship = require("../controllers/guardianRelationship.controller.js");
  
    var router = require("express").Router();
  
    // Create a new enrollment
    router.post("/", guardianRelationship.create);
  
    // Retrieve all enrollment
    router.get("/", guardianRelationship.findAll);  
    
    // Retrieve a single enrollment with id
    router.get("/:id", guardianRelationship.findOne);
  
    // Update a enrollment with id
    router.put("/:id", guardianRelationship.update);
  
    // Delete a enrollment with id
    router.delete("/:id", guardianRelationship.delete);
  
    // Delete all enrollment
    router.delete("/", guardianRelationship.deleteAll);
  
    app.use('/api/guardianRelationship', router);
  };
