module.exports = app => {
    const student_class = require("../controllers/student_class.controller.js");
  
    var router = require("express").Router();
  
    // Create a new student_class
    router.post("/", student_class.create);
    router.post("/bulk", student_class.createmany);
  
    // Retrieve all student_class(s)
    router.get("/", student_class.findAll);
  
    // Retrieve a single student_class with id
    router.get("/:id", student_class.findOne);
    // findAllByStudentId
    router.get( "/studentid/:StudentID", student_class.findAllByStudentId)
  
    // Update a student_class with id
    router.put("/:id", student_class.update);
  
    // Delete a student_class with id
    router.delete("/:id", student_class.delete);
  
    // Delete all student_class(s)
    router.delete("/", student_class.deleteAll);
    
    
    app.use('/api/student_class', router);
  };
