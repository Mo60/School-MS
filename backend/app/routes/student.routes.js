module.exports = app => {
    const student = require("../controllers/student.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", student.create);
  
    // Retrieve all student
    router.get("/", student.findAll);
  
    // Retrieve all published student
    router.get("/published", student.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", student.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", student.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", student.delete);
  
    // Delete all student
    router.delete("/", student.deleteAll);
  
    app.use('/api/student', router);
  };
