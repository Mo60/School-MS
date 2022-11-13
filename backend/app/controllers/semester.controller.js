const db = require("../models");
const Semester = db.semester;
const Op = db.Sequelize.Op;

// Create and Save a new semester
exports.create = (req, res) => {
  
};

// Retrieve all semesters from the database.
exports.findAll = (req, res) => {
  
};

// Find a single semester with an id
exports.findOne = (req, res) => {
  
};

// Update a semester by the id in the request
exports.update = (req, res) => {
  
};

// Delete a semester with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all semesters from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a semester
    const semester = {
      SemesterID: req.body.SemesterID,
      Semester: req.body.Semester
    };
  
    // Save semester in the database
    Semester.create(semester)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the semesterRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a semester
    const semesters = req.body;
  
    // Save semester in the database
    Semester.bulkCreate(semesters)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the semester."
        });
      });
  };

  exports.findAll = (req, res) => {
    Semester.findAll(   )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving semesters."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Semester.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving semester_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Semester.update(req.body, {
      where: { SemesterID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "semester was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update semester with id=${id}. Maybe semester was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating semester with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Semester.destroy({
      where: { SemesterID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "semester was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete semester with id=${id}. Maybe semester was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete semester with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Semester.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} semesters were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all semesters."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Semester.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving semesters."
        });
      });
  };
