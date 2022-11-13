const db = require("../models");
const Student_MedicalStatus = db.student_medicalStatus;
const Op = db.Sequelize.Op;

// Create and Save a new facultyStatus
exports.create = (req, res) => {
  
};

// Retrieve all facultyStatuss from the database.
exports.findAll = (req, res) => {
  
};

// Find a single facultyStatus with an id
exports.findOne = (req, res) => {
  
};

// Update a facultyStatus by the id in the request
exports.update = (req, res) => {
  
};

// Delete a facultyStatus with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all facultyStatuss from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a facultyStatus
    const student_medicalStatus = {
      StudentMedicalStatusID: req.body.StudentMedicalStatusID,
      Status: req.body.Status
    };
  
    // Save facultyStatus in the database
    Student_MedicalStatus.create(student_medicalStatus)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the student_medicalStatus."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a facultyStatus
    const student_medicalStatuses = req.body;
  
    // Save facultyStatus in the database
    Student_MedicalStatus.bulkCreate(student_medicalStatuses)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the student_medicalStatus."
        });
      });
  };

  exports.findAll = (req, res) => {
    Student_MedicalStatus.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving student_medicalStatus."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Student_MedicalStatus.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving student_medicalStatus with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Student_MedicalStatus.update(req.body, {
      where: { StudentMedicalStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "student_medicalStatus was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update student_medicalStatus with id=${id}. Maybe student_medicalStatus was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating student_medicalStatus with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Student_MedicalStatus.destroy({
      where: { FacultyStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "student_medicalStatus was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete student_medicalStatus with id=${id}. Maybe student_medicalStatus was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete student_medicalStatus with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Student_MedicalStatus.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} student_medicalStatus were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all facultyStatuss."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Student_MedicalStatus.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving student_medicalStatus."
        });
      });
  };
