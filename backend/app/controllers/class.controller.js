const db = require("../models");
const Class = db.class;
const Op = db.Sequelize.Op;

// Create and Save a new class
exports.create = (req, res) => {
  
};

// Retrieve all classs from the database.
exports.findAll = (req, res) => {
  
};

// Find a single class with an id
exports.findOne = (req, res) => {
  
};

// Update a class by the id in the request
exports.update = (req, res) => {
  
};

// Delete a class with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all classs from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published classs
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
  
    // Create a class
    const class = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save class in the database
    class.create(class)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the class."
        });
      });
  };

  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    class.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving classs."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    class.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving class with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    class.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "class was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update class with id=${id}. Maybe class was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating class with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    class.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "class was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete class with id=${id}. Maybe class was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete class with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    class.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} classs were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all classs."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    class.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving classs."
        });
      });
  };
