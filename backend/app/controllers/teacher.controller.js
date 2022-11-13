const db = require("../models");
const Teacher = db.teacher;
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
    if (!req.body.LastName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a teacher
    const teacher = {
      TeacherID: req.body.TeacherID,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      TeacherPhoneNumber: req.body.TeacherPhoneNumber,
      Notes: req.body.Notes
    };
  
    // Save teacher in the database
    Teacher.create(teacher)
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
    const TeacherID = req.query.TeacherID;
    var condition = TeacherID ? { TeacherID: { [Op.like]: `%${TeacherID}%` } } : null;
  
    Teacher.findAll(   )
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
  
    Teacher.findByPk(id)
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
  
    Teacher.update(req.body, {
      where: { TeacherID: id }
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
  
    Teacher.destroy({
      where: { TeacherID: id }
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
    Teacher.destroy({
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
    Teacher.findAll({ where: { published: true } })
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
