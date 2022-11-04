module.exports = app => {
    const studentStatus = require("../controllers/studentStatus.controller.js");
  
    var router = require("express").Router();
  
    // Create a new studentStatus
    router.post("/", studentStatus.create);
    router.post("/bulk", studentStatus.createmany);
  
    // Retrieve all studentStatus(s)
    router.get("/", studentStatus.findAll);
  
    // Retrieve a single studentStatus with id
    router.get("/:id", studentStatus.findOne);
  
    // Update a studentStatus with id
    router.put("/:id", studentStatus.update);
  
    // Delete a studentStatus with id
    router.delete("/:id", studentStatus.delete);
  
    // Delete all studentStatus(s)
    router.delete("/", studentStatus.deleteAll);
  
    app.use('/api/studentStatus', router);
  };
