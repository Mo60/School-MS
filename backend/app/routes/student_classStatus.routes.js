module.exports = app => {
    const student_classStatus = require("../controllers/student_classStatus.controller.js");
  
    var router = require("express").Router();
  
    // Create a new student_classStatus
    router.post("/", student_classStatus.create);
    router.post("/bulk", student_classStatus.createmany);
  
    // Retrieve all student_classStatus(s)
    router.get("/", student_classStatus.findAll);
  
    // Retrieve a single student_classStatus with id
    router.get("/:id", student_classStatus.findOne);
  
    // Update a student_classStatus with id
    router.put("/:id", student_classStatus.update);
  
    // Delete a student_classStatus with id
    router.delete("/:id", student_classStatus.delete);
  
    // Delete all student_classStatus(s)
    router.delete("/", student_classStatus.deleteAll);
  
    app.use('/api/student_classStatus', router);
  };
