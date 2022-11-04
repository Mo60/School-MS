module.exports = app => {
    const day = require("../controllers/day.controller.js");
  
    var router = require("express").Router();
  
    // Create a new day
    router.post("/", day.create);
    router.post("/bulk", day.createmany);
  
    // Retrieve all day(s)
    router.get("/", day.findAll);
  
    // Retrieve a single day with id
    router.get("/:id", day.findOne);
  
    // Update a day with id
    router.put("/:id", day.update);
  
    // Delete a day with id
    router.delete("/:id", day.delete);
  
    // Delete all day(s)
    router.delete("/", day.deleteAll);
  
    app.use('/api/day', router);
  };
