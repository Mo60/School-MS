module.exports = app => {
    const guardianStatus = require("../controllers/guardianStatus.controller.js");
  
    var router = require("express").Router();
  
    // Create a new guardianStatus
    router.post("/", guardianStatus.create);
    router.post("/bulk", guardianStatus.createmany);
  
    // Retrieve all guardianStatus
    router.get("/", guardianStatus.findAll);
  
    // Retrieve a guardianStatus with ID
    router.get("/:id", guardianStatus.findOne);
  
    // Update a guardianStatus with id
    router.put("/:id", guardianStatus.update);
  
    // Delete a guardianStatus with id
    router.delete("/:id", guardianStatus.delete);
  
    // Delete all guardianStatus
    router.delete("/", guardianStatus.deleteAll);
  
    app.use('/api/guardianStatus', router);
  };
