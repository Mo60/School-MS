module.exports = app => {
    const teacher = require("../controllers/teacher.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", teacher.create);
  
    // Retrieve all teacher
    router.get("/", teacher.findAll);
  
    // Retrieve all published teacher
    router.get("/published", teacher.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", teacher.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", teacher.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", teacher.delete);
  
    // Delete all teacher
    router.delete("/", teacher.deleteAll);
  
    app.use('/api/teacher', router);
  };
