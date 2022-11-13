const db = require("../models");
const Faculty = db.faculty;
const Op = db.Sequelize.Op;

// Create and Save a new faculty
exports.create = (req, res) => {
  
};

// Retrieve all facultys from the database.
exports.findAll = (req, res) => {
  
};

// Find a single faculty with an id
exports.findOne = (req, res) => {
  
};

// Update a faculty by the id in the request
exports.update = (req, res) => {
  
};

// Delete a faculty with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all facultys from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a faculty
    const faculty = {
      FacultyID: req.body.FacultyID,
      FirstName: req.body.FirstName,
      MiddleName: req.body.MiddleName,
      LastName: req.body.LastName,
      PhoneNumber: req.body.PhoneNumber,
      CellNumber: req.body.CellNumber,
      Email: req.body.Email,
      Title: req.body.Title,
      FacultyStatusID: req.body.FacultyStatusID
    };
  
    // Save faculty in the database
    Faculty.create(faculty)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the facultyRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a faculty
    const faculties = req.body;
  
    // Save faculty in the database
    Faculty.bulkCreate(faculties)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the faculty."
        });
      });
  };

  exports.findAll = (req, res) => {
    Faculty.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving facultys."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Faculty.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving faculty_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Faculty.update(req.body, {
      where: { FacultyID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "faculty was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update faculty with id=${id}. Maybe faculty was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating faculty with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Faculty.destroy({
      where: { FacultyID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "faculty was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete faculty with id=${id}. Maybe faculty was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete faculty with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Faculty.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} facultys were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all facultys."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Faculty.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving facultys."
        });
      });
  };
