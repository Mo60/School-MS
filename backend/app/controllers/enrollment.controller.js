const db = require("../models");
const Enrollment = db.enrollment;
const Op = db.Sequelize.Op;

// Create and Save a new enrollment
exports.create = (req, res) => {
  
};

// Retrieve all enrollments from the database.
exports.findAll = (req, res) => {
  
};

// Find a single enrollment with an id
exports.findOne = (req, res) => {
  
};

// Update a enrollment by the id in the request
exports.update = (req, res) => {
  
};

// Delete a enrollment with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all enrollments from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published enrollments
exports.findAllPublished = (req, res) => {
  
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body.EnrollmentID) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a enrollment
    const enrollment = {
      EnrollmentID: req.body.EnrollmentID,
      ClassID: req.body.ClassID,
      StudentID: req.body.StudentID
    };
  
    // Save enrollment in the database
    Enrollment.create(enrollment)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the enrollment."
        });
      });
  };

  exports.findAll = (req, res) => {
    const EnrollmentID = req.query.EnrollmentID;
    var condition = EnrollmentID ? { EnrollmentID: { [Op.like]: `%${EnrollmentID}%` } } : null;
    
    Enrollment.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving enrollments."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Enrollment.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving enrollment with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Enrollment.update(req.body, {
      where: { EnrollmentID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "enrollment was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update enrollment with id=${id}. Maybe enrollment was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating enrollment with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Enrollment.destroy({
      where: { EnrollmentID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "enrollment was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete enrollment with id=${id}. Maybe enrollment was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete enrollment with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Enrollment.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} enrollments were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all enrollments."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Enrollment.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving enrollments."
        });
      });
  };
