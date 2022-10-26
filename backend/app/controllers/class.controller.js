const db = require("../models");
const Class = db.Class;
const Op = db.Sequelize.Op;

// Create and Save a new Class
exports.create = (req, res) => {
  
};

// Retrieve all Classs from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Class with an id
exports.findOne = (req, res) => {
  
};

// Update a Class by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Class with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Classs from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Classs
exports.findAllPublished = (req, res) => {
  
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Class
    const Class = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save Class in the database
    Class.create(Class)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Class."
        });
      });
  };

  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Class.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Classs."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Class.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Class with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Class.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Class was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Class with id=${id}. Maybe Class was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Class with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Class.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Class was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Class with id=${id}. Maybe Class was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Class with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Class.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Classs were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Classs."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Class.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Classs."
        });
      });
  };
