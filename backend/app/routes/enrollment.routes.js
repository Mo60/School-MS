module.exports = app => {
    const enrollment = require("../controllers/enrollment.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", enrollment.create);
  
    // Retrieve all enrollment
    router.get("/", enrollment.findAll);
  
    // Retrieve all published enrollment
    router.get("/published", enrollment.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", enrollment.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", enrollment.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", enrollment.delete);
  
    // Delete all enrollment
    router.delete("/", enrollment.deleteAll);
  
    app.use('/api/enrollment', router);
  };
