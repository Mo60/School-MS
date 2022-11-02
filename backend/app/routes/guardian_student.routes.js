module.exports = app => {
    const guardian_student = require("../controllers/guardian_student.controller.js");
  
    var router = require("express").Router();
  
    // Create a new parent
    router.post("/", guardian_student.create);
    router.post("/bulk", guardian_student.createmany);
  
    // Retrieve all parent
    router.get("/", guardian_student.findAll);
  
    // Retrieve a single parent with id
    router.get("/:id", guardian_student.findOne);
  
    // Update a parent with id
    router.put("/:id", guardian_student.update);
  
    // Delete a parent with id
    router.delete("/:id", guardian_student.delete);
  
    // Delete all parent
    router.delete("/", guardian_student.deleteAll);
  
    app.use('/api/guardian_student', router);
  };
