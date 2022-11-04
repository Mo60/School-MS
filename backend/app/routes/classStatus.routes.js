module.exports = app => {
    const classStatus = require("../controllers/classStatus.controller.js");
  
    var router = require("express").Router();
  
    // Create a new classStatus
    router.post("/", classStatus.create);
    router.post("/bulk", classStatus.createmany);
  
    // Retrieve all classStatus(s)
    router.get("/", classStatus.findAll);
  
    // Retrieve a single classStatus with id
    router.get("/:id", classStatus.findOne);
  
    // Update a classStatus with id
    router.put("/:id", classStatus.update);
  
    // Delete a classStatus with id
    router.delete("/:id", classStatus.delete);
  
    // Delete all classStatus(s)
    router.delete("/", classStatus.deleteAll);
  
    app.use('/api/classStatus', router);
  };
