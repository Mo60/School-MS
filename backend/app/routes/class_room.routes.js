module.exports = app => {
    const class_room = require("../controllers/class_room.controller.js");
  
    var router = require("express").Router();
  
    // Create a new class_room
    router.post("/", class_room.create);
    router.post("/bulk", class_room.createmany);
  
    // Retrieve all class_room(s)
    router.get("/", class_room.findAll);
  
    // Retrieve a single class_room with id
    router.get("/:id", class_room.findOne);
  
    // Update a class_room with id
    router.put("/:id", class_room.update);
  
    // Delete a class_room with id
    router.delete("/:id", class_room.delete);
  
    // Delete all class_room(s)
    router.delete("/", class_room.deleteAll);
  
    app.use('/api/class_room', router);
  };
