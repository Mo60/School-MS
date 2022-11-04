module.exports = app => {
    const facultyStatus = require("../controllers/facultyStatus.controller.js");
  
    var router = require("express").Router();
  
    // Create a new facultyStatus
    router.post("/", facultyStatus.create);
    router.post("/bulk", facultyStatus.createmany);
  
    // Retrieve all facultyStatus(s)
    router.get("/", facultyStatus.findAll);
  
    // Retrieve a single facultyStatus with id
    router.get("/:id", facultyStatus.findOne);
  
    // Update a facultyStatus with id
    router.put("/:id", facultyStatus.update);
  
    // Delete a facultyStatus with id
    router.delete("/:id", facultyStatus.delete);
  
    // Delete all facultyStatus(s)
    router.delete("/", facultyStatus.deleteAll);
  
    app.use('/api/facultyStatus', router);
  };
