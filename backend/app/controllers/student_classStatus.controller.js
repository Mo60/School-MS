const db = require("../models");
const Student_ClassStatus = db.student_classStatus;
const Op = db.Sequelize.Op;

// Create and Save a new student_classStatus
exports.create = (req, res) => {
  
};

// Retrieve all student_classStatuss from the database.
exports.findAll = (req, res) => {
  
};

// Find a single student_classStatus with an id
exports.findOne = (req, res) => {
  
};

// Update a student_classStatus by the id in the request
exports.update = (req, res) => {
  
};

// Delete a student_classStatus with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all student_classStatuss from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a student_classStatus
    const student_classStatus = {
      StudentClassStatusID: req.body.StudentClassStatusID,
      Status: req.body.Status
    };
  
    // Save student_classStatus in the database
    Student_ClassStatus.create(student_classStatus)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the student_classStatusRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a student_classStatus
    const student_classStatuses = req.body;
  
    // Save student_classStatus in the database
    Student_ClassStatus.bulkCreate(student_classStatuses)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the student_classStatus."
        });
      });
  };

  exports.findAll = (req, res) => {
    Student_ClassStatus.findAll(   )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving student_classStatuss."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Student_ClassStatus.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving student_classStatus_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Student_ClassStatus.update(req.body, {
      where: { StudentClassStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "student_classStatus was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update student_classStatus with id=${id}. Maybe student_classStatus was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating student_classStatus with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Student_ClassStatus.destroy({
      where: { StudentClassStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "student_classStatus was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete student_classStatus with id=${id}. Maybe student_classStatus was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete student_classStatus with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Student_ClassStatus.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} student_classStatuss were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all student_classStatuss."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Student_ClassStatus.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving student_classStatuss."
        });
      });
  };
