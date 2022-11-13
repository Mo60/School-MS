const db = require("../models");
const GuardianStatus = db.guardianStatus;
const Op = db.Sequelize.Op;

// Create and Save a new guardianStatus
exports.create = (req, res) => {
  
};

// Retrieve all guardianStatus(s) from the database.
exports.findAll = (req, res) => {
  
};

// Find a single guardianStatus with an id
exports.findOne = (req, res) => {
  
};

// Update a guardianStatus by the id in the request
exports.update = (req, res) => {
  
};

// Delete a guardianStatus with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all guardianStatus(s) from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a guardian
    const guardianStatus = {
      GuardianStatusID: req.body.GuardianStatusID,
      Status: req.body.Status
    };
  
    // Save guardian in the database
    GuardianStatus.create(guardianStatus)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the guardianStatus."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a guardian
    const guardianStatuses = req.body;
  
    // Save guardian in the database
    GuardianStatus.bulkCreate(guardianStatuses)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the guardianStatus."
        });
      });
  };

  exports.findAll = (req, res) => {
    GuardianStatus.findAll(   )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving guardianStatus."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    GuardianStatus.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving guardianStatus with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    GuardianStatus.update(req.body, {
      where: { GuardianStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "guardianStatus was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update guardianStatus with id=${id}. Maybe guardianStatus was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating guardianStatus with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    GuardianStatus.destroy({
      where: { GuardianStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "guardianStatus was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete guardianStatus with id=${id}. Maybe guardianStatus was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete guardianStatus with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    GuardianStatus.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} guardianStatus(s) were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all guardianStatus(s)."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    GuardianStatus.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving guardianStatus(s)."
        });
      });
  };
