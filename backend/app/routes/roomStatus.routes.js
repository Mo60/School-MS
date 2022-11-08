module.exports = app => {
    const roomStatus = require("../controllers/roomStatus.controller.js");
  
    var router = require("express").Router();
  
    // Create a new roomStatus  router.post("/", roomStatus.create);
    router.post("/", roomStatus.create);
    router.post("/bulk", roomStatus.createmany);
  
    // Retrieve all roomStatus(s)
    router.get("/", roomStatus.findAll);
  
    // Retrieve a single roomStatus with id
    router.get("/:id", roomStatus.findOne);
  
    // Update a roomStatus with id
    router.put("/:id", roomStatus.update);
  
    // Delete a roomStatus with id
    router.delete("/:id", roomStatus.delete);
  
    // Delete all roomStatus(s)
    router.delete("/", roomStatus.deleteAll);
  
    app.use('/api/roomStatus', router);
  };
