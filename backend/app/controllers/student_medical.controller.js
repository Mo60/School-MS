const db = require("../models");
const Student_Medical = db.student_medical;
const Op = db.Sequelize.Op;

// Create and Save a new student_medical
exports.create = (req, res) => {
  
};

// Retrieve all student_medicals from the database.
exports.findAll = (req, res) => {
  
};

// Find a single student_medical with an id
exports.findOne = (req, res) => {
  
};

// Update a student_medical by the id in the request
exports.update = (req, res) => {
  
};

// Delete a student_medical with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all student_medicals from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a student_medical
    const student_medical = {
      StudentID: req.body.StudentID,
      MedicalID: req.body.MedicalID,
      Description: req.body.Description,
      StudentMedicalStatusID: req.body.StudentMedicalStatusID
    };
  
    // Save student_medical in the database
    Student_Medical.create(student_medical)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the student_medicalRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a student_medical
    const student_medicals = req.body;
  
    // Save student_medical in the database
    Student_Medical.bulkCreate(student_medicals)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the student_medical."
        });
      });
  };

  exports.findAll = (req, res) => {
    Student_Medical.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving info."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Student_Medical.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving student_medical_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Student_Medical.update(req.body, {
      where: { _id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "student_medical was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update student_medical with id=${id}. Maybe student_medical was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating student_medical with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Student_Medical.destroy({
      where: { _id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "student_medical was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete student_medical with id=${id}. Maybe student_medical was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete student_medical with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Student_Medical.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} student_medicals were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all student_medicals."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Student_Medical.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving student_medicals."
        });
      });
  };
