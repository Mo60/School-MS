const db = require("../models");
const Faculty_Class = db.faculty_class;
const Op = db.Sequelize.Op;

// Create and Save a new faculty_class
exports.create = (req, res) => {
  
};

// Retrieve all faculty_classs from the database.
exports.findAll = (req, res) => {
  
};

// Find a single faculty_class with an id
exports.findOne = (req, res) => {
  
};

// Update a faculty_class by the id in the request
exports.update = (req, res) => {
  
};

// Delete a faculty_class with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all faculty_classs from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a faculty_class
    const faculty_class = {
      ClassID: req.body.ClassID,
      FacultyID: req.body.FacultyID
    };
  
    // Save faculty_class in the database
    Faculty_Class.create(faculty_class)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the faculty_classRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a faculty_class
    const faculty_classes = req.body;
  
    // Save faculty_class in the database
    Faculty_Class.bulkCreate(faculty_classes)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the faculty_class."
        });
      });
  };

  exports.findAll = (req, res) => {
    Faculty_Class.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving faculty_classs."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Faculty_Class.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving faculty_class_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Faculty_Class.update(req.body, {
      where: { _id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "faculty_class was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update faculty_class with id=${id}. Maybe faculty_class was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating faculty_class with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Faculty_Class.destroy({
      where: { _id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "faculty_class was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete faculty_class with id=${id}. Maybe faculty_class was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete faculty_class with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Faculty_Class.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} faculty_classs were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all faculty_classs."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Faculty_Class.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving faculty_classs."
        });
      });
  };
