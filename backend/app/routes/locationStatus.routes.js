module.exports = app => {
    const locationStatus = require("../controllers/locationStatus.controller.js");
  
    var router = require("express").Router();
  
    // Create a new locationStatus  router.post("/", locationStatus.create);
    router.post("/", locationStatus.create);
    router.post("/bulk", locationStatus.createmany);
  
    // Retrieve all locationStatus(s)
    router.get("/", locationStatus.findAll);
  
    // Retrieve a single locationStatus with id
    router.get("/:id", locationStatus.findOne);
  
    // Update a locationStatus with id
    router.put("/:id", locationStatus.update);
  
    // Delete a locationStatus with id
    router.delete("/:id", locationStatus.delete);
  
    // Delete all locationStatus(s)
    router.delete("/", locationStatus.deleteAll);
  
    app.use('/api/locationStatus', router);
  };
