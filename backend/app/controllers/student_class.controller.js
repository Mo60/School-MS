const db = require("../models");
const Student_Class = db.student_class;
const Op = db.Sequelize.Op;

// Create and Save a new student_class
exports.create = (req, res) => {
  
};

// Retrieve all student_classs from the database.
exports.findAll = (req, res) => {
  
};

// Find a single student_class with an id
exports.findOne = (req, res) => {
  
};

// Update a student_class by the id in the request
exports.update = (req, res) => {
  
};

// Delete a student_class with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all student_classs from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a student_class
    const student_class = {
      StudentID: req.body.StudentID,
      ClassID: req.body.ClassID,
      StudentClassStatusID: req.body.StudentClassStatusID
    };
  
    // Save student_class in the database
    Student_Class.create(student_class)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the student_classRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a student_class
    const student_classes = req.body;
  
    // Save student_class in the database
    Student_Class.bulkCreate(student_classes)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the student_class."
        });
      });
  };

  exports.findAll = (req, res) => {
    Student_Class.findAll(   )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving student_classs."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Student_Class.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving student_class_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Student_Class.update(req.body, {
      where: { _id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "student_class was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update student_class with id=${id}. Maybe student_class was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating student_class with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Student_Class.destroy({
      where: { _id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "student_class was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete student_class with id=${id}. Maybe student_class was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete student_class with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Student_Class.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} student_classs were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all student_classs."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Student_Class.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving student_classs."
        });
      });
  };

  exports.findAllByStudentId = (req,res) => {
    Student_Class.findAll({ where: { StudentID: req.params.StudentID } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving student_classs."
        });
      });

  }
