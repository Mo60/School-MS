module.exports = app => {
    const semester = require("../controllers/semester.controller.js");
  
    var router = require("express").Router();
  
    // Create a new parent
    router.post("/", semester.create);
    router.post("/bulk", semester.createmany);
  
    // Retrieve all parent
    router.get("/", semester.findAll);
  
    // Retrieve a single parent with id
    router.get("/:id", semester.findOne);
  
    // Update a parent with id
    router.put("/:id", semester.update);
  
    // Delete a parent with id
    router.delete("/:id", semester.delete);
  
    // Delete all parent
    router.delete("/", semester.deleteAll);
  
    app.use('/api/semester', router);
  };
