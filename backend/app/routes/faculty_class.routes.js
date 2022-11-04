module.exports = app => {
    const faculty_class = require("../controllers/faculty_class.controller.js");
  
    var router = require("express").Router();
  
    // Create a new faculty_class
    router.post("/", faculty_class.create);
    router.post("/bulk", faculty_class.createmany);
  
    // Retrieve all faculty_class(s)
    router.get("/", faculty_class.findAll);
  
    // Retrieve a single faculty_class with id
    router.get("/:id", faculty_class.findOne);
  
    // Update a faculty_class with id
    router.put("/:id", faculty_class.update);
  
    // Delete a faculty_class with id
    router.delete("/:id", faculty_class.delete);
  
    // Delete all faculty_class(s)
    router.delete("/", faculty_class.deleteAll);
  
    app.use('/api/faculty_class', router);
  };
