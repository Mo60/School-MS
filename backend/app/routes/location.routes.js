module.exports = app => {
    const location = require("../controllers/location.controller.js");
  
    var router = require("express").Router();
  
    // Create a new location
    router.post("/", location.create);
    router.post("/bulk", location.createmany);
  
    // Retrieve all location(s)
    router.get("/", location.findAll);
  
    // Retrieve a single location with id
    router.get("/:id", location.findOne);
  
    // Update a location with id
    router.put("/:id", location.update);
  
    // Delete a location with id
    router.delete("/:id", location.delete);
  
    // Delete all location(s)
    router.delete("/", location.deleteAll);
  
    app.use('/api/location', router);
  };
