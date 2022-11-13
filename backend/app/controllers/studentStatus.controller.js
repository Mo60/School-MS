const db = require("../models");
const StudentStatus  = db.studentStatus;
const Op = db.Sequelize.Op;

// Create and Save a new studentStatus
exports.create = (req, res) => {
  
};

// Retrieve all studentStatuss from the database.
exports.findAll = (req, res) => {
  
};

// Find a single studentStatus with an id
exports.findOne = (req, res) => {
  
};

// Update a studentStatus by the id in the request
exports.update = (req, res) => {
  
};

// Delete a studentStatus with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all studentStatuss from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a studentStatus
    const studentStatus = {
      StudentStatusID: req.body.StudentStatusID,
      Status: req.body.Status
    };
  
    // Save studentStatus in the database
    StudentStatus.create(studentStatus)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the studentStatus."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a studentStatus
    const studentStatuss = req.body;
  
    // Save studentStatus in the database
    StudentStatus.bulkCreate(studentStatuss)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the studentStatus."
        });
      });
  };

  exports.findAll = (req, res) => {
    StudentStatus.findAll(   )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving studentStatuss."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    StudentStatus.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving studentStatus_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    StudentStatus.update(req.body, {
      where: { StudentStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "studentStatus was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update studentStatus with id=${id}. Maybe studentStatus was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating studentStatus with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    StudentStatus.destroy({
      where: { StudentStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "studentStatus was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete studentStatus with id=${id}. Maybe studentStatus was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete studentStatus with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    StudentStatus.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} studentStatuss were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all studentStatuss."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    StudentStatus.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving studentStatuss."
        });
      });
  };
