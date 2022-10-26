const db = require("../models");
const teacher = db.teacher;
const Op = db.Sequelize.Op;

// Create and Save a new teacher
exports.create = (req, res) => {
  
};

// Retrieve all teachers from the database.
exports.findAll = (req, res) => {
  
};

// Find a single teacher with an id
exports.findOne = (req, res) => {
  
};

// Update a teacher by the id in the request
exports.update = (req, res) => {
  
};

// Delete a teacher with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all teachers from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published teachers
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
  
    // Create a teacher
    const teacher = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save teacher in the database
    teacher.create(teacher)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the teacher."
        });
      });
  };

  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    teacher.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving teachers."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    teacher.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving teacher with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    teacher.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "teacher was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update teacher with id=${id}. Maybe teacher was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating teacher with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    teacher.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "teacher was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete teacher with id=${id}. Maybe teacher was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete teacher with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    teacher.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} teachers were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all teachers."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    teacher.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving teachers."
        });
      });
  };
