const db = require("../models");
const Parent = db.parent;
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
    const parent = {
      ParentsID: req.body.ParentsID,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      PhoneType: req.body.PhoneType,
      PhoneNumber: req.body.PhoneNumber,
      Email: req.body.Email,
      Street: req.body.Street,
      City: req.body.City,
      Zip: req.body.Zip,
      Reference: req.body.Reference,
      Notes: req.body.Notes
    };
  
    // Save parent in the database
    Parent.create(parent)
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
// bulk
 exports.createmany = (req, res) => {
    // Create a parent
    const parents = req.body;
  
    // Save parent in the database
    Parent.bulkCreate(parents)
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
    const ParentsID = req.query.ParentsID;
    var condition = ParentsID ? { ParentsID: { [Op.like]: `%${ParentsID}%` } } : null;
  
    Parent.findAll(   )
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
  
    Parent.findByPk(id)
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
  
    Parent.update(req.body, {
      where: { ParentsID: id }
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
  
    Parent.destroy({
      where: { ParentsID: id }
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
    Parent.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} parents were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all parents."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Parent.findAll({ where: { published: true } })
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
