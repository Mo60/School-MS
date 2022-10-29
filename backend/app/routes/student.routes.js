module.exports = app => {
    const student = require("../controllers/student.controller.js");
  
    var router = require("express").Router();
  
    // Create a new student
    router.post("/", student.create);
    router.post("/bulk", student.createmany);
  
    // Retrieve all student
    router.get("/", student.findAll);
  
    // Retrieve a single student with id
    router.get("/:id", student.findOne);
  
    // Update a student with id
    router.put("/:id", student.update);
  
    // Delete a student with id
    router.delete("/:id", student.delete);
  
    // Delete all student
    router.delete("/", student.deleteAll);
  
    app.use('/api/student', router);
  };
