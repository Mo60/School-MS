module.exports = app => {
    const room = require("../controllers/room.controller.js");
  
    var router = require("express").Router();
  
    // Create a new room
    router.post("/", room.create);
    
    router.post("/bulk", room.createmany);
  
    // Retrieve all room(s)
    router.get("/", room.findAll);
  
    // Retrieve a single room with id
    router.get("/:id", room.findOne);
  
    // Update a room with id
    router.put("/:id", room.update);
  
    // Delete a room with id
    router.delete("/:id", room.delete);
  
    // Delete all room(s)
    router.delete("/", room.deleteAll);
  
    app.use('/api/room', router);
  };
