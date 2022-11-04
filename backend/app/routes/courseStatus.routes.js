module.exports = app => {
    const courseStatus = require("../controllers/courseStatus.controller.js");
  
    var router = require("express").Router();
  
    // Create a new courseStatus
    router.post("/", courseStatus.create);
    router.post("/bulk", courseStatus.createmany);
  
    // Retrieve all courseStatus(s)
    router.get("/", courseStatus.findAll);
  
    // Retrieve a single courseStatus with id
    router.get("/:id", courseStatus.findOne);
  
    // Update a courseStatus with id
    router.put("/:id", courseStatus.update);
  
    // Delete a courseStatus with id
    router.delete("/:id", courseStatus.delete);
  
    // Delete all courseStatus(s)
    router.delete("/", courseStatus.deleteAll);
  
    app.use('/api/courseStatus', router);
  };
