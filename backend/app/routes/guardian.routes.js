module.exports = app => {
    const guardian = require("../controllers/guardian.controller.js");
  
    var router = require("express").Router();
  
    // Create a new guaridan
    router.post("/", guardian.create);
    router.post("/bulk", guardian.createmany);
  
    // Retrieve all guardian(s)
    router.get("/", guardian.findAll);
  
    // Retrieve a single guardian with id
    router.get("/:id", guardian.findOne);
  
    // Update a guardian with id
    router.put("/:id", guardian.update);
  
    // Delete a guardian with id
    router.delete("/:id", guardian.delete);
  
    // Delete all guardian(s)
    router.delete("/", guardian.deleteAll);
  
    app.use('/api/guardian', router);
  };
