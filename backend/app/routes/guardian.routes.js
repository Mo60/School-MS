module.exports = app => {
    const guardian = require("../controllers/guardian.controller.js");
  
    var router = require("express").Router();
  
    // Create a new parent
    router.post("/", guardian.create);
    router.post("/bulk", guardian.createmany);
  
    // Retrieve all parent
    router.get("/", guardian.findAll);
  
    // Retrieve a single parent with id
    router.get("/:id", guardian.findOne);
  
    // Update a parent with id
    router.put("/:id", guardian.update);
  
    // Delete a parent with id
    router.delete("/:id", guardian.delete);
  
    // Delete all parent
    router.delete("/", guardian.deleteAll);
  
    app.use('/api/guardian', router);
  };
