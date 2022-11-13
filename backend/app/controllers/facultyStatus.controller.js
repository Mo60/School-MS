const db = require("../models");
const FacultyStatus = db.facultyStatus;
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
    const facultyStatus = {
      FacultyStatusID: req.body.FacultyStatusID,
      Status: req.body.Status
    };
  
    // Save facultyStatus in the database
    FacultyStatus.create(facultyStatus)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the facultyStatusRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a facultyStatus
    const facultyStatuses = req.body;
  
    // Save facultyStatus in the database
    FacultyStatus.bulkCreate(facultyStatuses)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the facultyStatus."
        });
      });
  };

  exports.findAll = (req, res) => {
    FacultyStatus.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving facultyStatuss."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    FacultyStatus.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving facultyStatus_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    FacultyStatus.update(req.body, {
      where: { FacultyStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "facultyStatus was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update facultyStatus with id=${id}. Maybe facultyStatus was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating facultyStatus with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    FacultyStatus.destroy({
      where: { FacultyStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "facultyStatus was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete facultyStatus with id=${id}. Maybe facultyStatus was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete facultyStatus with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    FacultyStatus.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} facultyStatuss were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all facultyStatuss."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    FacultyStatus.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving facultyStatuss."
        });
      });
  };
