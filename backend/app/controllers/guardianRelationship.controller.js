const db = require("../models");
const GuardianRelationship = db.guardianRelationship;
const Op = db.Sequelize.Op;

// Create and Save a new guardianRelationship
exports.create = (req, res) => {
  
};

// Retrieve all guardianRelationship from the database.
exports.findAll = (req, res) => {
  
};

// Find a single guardianRelationship with an id
exports.findOne = (req, res) => {
  
};

// Update a guardianRelationship by the id in the request
exports.update = (req, res) => {
  
};

// Delete a guardianRelationship with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all guardianRelationships from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a guardian
    const guardianRelationship = {
      RelationshipID: req.body.RelationshipID,
      Relationship: req.body.Relationship
    };
  
    // Save guardian in the database
    GuardianRelationship.create(guardianRelationship)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the guardianRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a guardian
    const guardianRelationships = req.body;
  
    // Save guardian in the database
    GuardianRelationship.bulkCreate(guardianRelationships)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the guardianRelationship."
        });
      });
  };

  exports.findAll = (req, res) => {
    GuardianRelationship.findAll(   )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving guardianRelationships."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    GuardianRelationship.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving guardianRelationship with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    GuardianRelationship.update(req.body, {
      where: { RelationshipID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "guardianRelationship was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update guardianRelationship with id=${id}. Maybe guardianRelationship was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating guardianRelationship with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    GuardianRelationship.destroy({
      where: { RelationshipID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "guardian was guardianRelationship successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete guardianRelationship with id=${id}. Maybe guardianRelationship was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete guardianRelationship with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    GuardianRelationship.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} guardians were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all guardianRelationships."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    GuardianRelationship.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving guardianRelationships."
        });
      });
  };
