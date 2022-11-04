module.exports = app => {
    const timeblock = require("../controllers/timeblock.controller.js");
  
    var router = require("express").Router();
  
    // Create a new guaridan
    router.post("/", timeblock.create);
    router.post("/bulk", timeblock.createmany);
  
    // Retrieve all timeblock(s)
    router.get("/", timeblock.findAll);
  
    // Retrieve a single timeblock with id
    router.get("/:id", timeblock.findOne);
  
    // Update a timeblock with id
    router.put("/:id", timeblock.update);
  
    // Delete a timeblock with id
    router.delete("/:id", timeblock.delete);
  
    // Delete all timeblock(s)
    router.delete("/", timeblock.deleteAll);
  
    app.use('/api/timeblock', router);
  };
