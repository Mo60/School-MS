module.exports = app => {
    const student_medicalStatus = require("../controllers/student_medicalStatus.controller.js");
  
    var router = require("express").Router();
  
    // Create a new student_medicalStatus
    router.post("/", student_medicalStatus.create);
    router.post("/bulk", student_medicalStatus.createmany);
  
    // Retrieve all student_medicalStatus(s)
    router.get("/", student_medicalStatus.findAll);
  
    // Retrieve a single student_medicalStatus with id
    router.get("/:id", student_medicalStatus.findOne);
  
    // Update a student_medicalStatus with id
    router.put("/:id", student_medicalStatus.update);
  
    // Delete a student_medicalStatus with id
    router.delete("/:id", student_medicalStatus.delete);
  
    // Delete all student_medicalStatus(s)
    router.delete("/", student_medicalStatus.deleteAll);
  
    app.use('/api/student_medicalStatus', router);
  };
