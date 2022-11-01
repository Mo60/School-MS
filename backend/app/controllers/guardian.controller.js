const db = require("../models");
const Guardian = db.guardian;
const Op = db.Sequelize.Op;

// Create and Save a new parent
exports.create = (req, res) => {
  
};

// Retrieve all parents from the database.
exports.findAll = (req, res) => {
  
};

// Find a single parent with an id
exports.findOne = (req, res) => {
  
};

// Update a parent by the id in the request
exports.update = (req, res) => {
  
};

// Delete a parent with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all parents from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a parent
    const guardian = {
      GuardianID: req.body.GuardianID,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      DOB: req.body.DOB,
      CellNumber: req.body.CellNumber,
      PhoneNumber: req.body.PhoneNumber,
      Email: req.body.Email,
      Street: req.body.Street,
      City: req.body.City,
      State: req.body.State,
      Zip: req.body.Zip,
      CanPickup: req.body.CanPickup,
      IsEmergency: req.body.IsEmergency,
      RelationshipID: req.body.RelationshipID,
      GuardianStatusID: req.body.GuardianStatusID
    };
  
    // Save parent in the database
    Guardian.create(guardian)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the guardian."
        });
      });
  };
// bulk
 exports.createmany = (req, res) => {
    // Create a guardian
    const guardians = req.body;
  
    // Save parent in the database
    Guardian.bulkCreate(guardians)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the parent."
        });
      });
  };

  exports.findAll = (req, res) => {
    const GuardianID = req.query.GuardianID;
    var condition = GuardianID ? { GuardianID: { [Op.like]: `%${GuardianID}%` } } : null;
  
    Parent.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving parents."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Guardian.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving parent with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Guardian.update(req.body, {
      where: { GuardianID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "parent was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update parent with id=${id}. Maybe parent was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating parent with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Guardian.destroy({
      where: { GuardianID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "parent was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete parent with id=${id}. Maybe parent was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete parent with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Guardian.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} guardians were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all parents."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Guardian.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving parents."
        });
      });
  };
