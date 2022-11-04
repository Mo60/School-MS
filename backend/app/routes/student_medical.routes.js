module.exports = app => {
    const student_medical = require("../controllers/student_medical.controller.js");
  
    var router = require("express").Router();
  
    // Create a new student_medical
    router.post("/", student_medical.create);
    router.post("/bulk", student_medical.createmany);
  
    // Retrieve all student_medical(s)
    router.get("/", student_medical.findAll);
  
    // Retrieve a single student_medical with id
    router.get("/:id", student_medical.findOne);
  
    // Update a student_medical with id
    router.put("/:id", student_medical.update);
  
    // Delete a student_medical with id
    router.delete("/:id", student_medical.delete);
  
    // Delete all student_medical(s)
    router.delete("/", student_medical.deleteAll);
  
    app.use('/api/student_medical', router);
  };
