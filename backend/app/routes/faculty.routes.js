module.exports = app => {
    const faculty = require("../controllers/faculty.controller.js");
  
    var router = require("express").Router();
  
    // Create a new faculty
    router.post("/", faculty.create);
    router.post("/bulk", faculty.createmany);
  
    // Retrieve all faculty(s)
    router.get("/", faculty.findAll);
  
    // Retrieve a single faculty with id
    router.get("/:id", faculty.findOne);
  
    // Update a faculty with id
    router.put("/:id", faculty.update);
  
    // Delete a faculty with id
    router.delete("/:id", faculty.delete);
  
    // Delete all faculty(s)
    router.delete("/", faculty.deleteAll);
  
    app.use('/api/faculty', router);
  };
