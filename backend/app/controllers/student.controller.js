const { guardian } = require("../models");
const db = require("../models");
const parentRoutes = require("../routes/parent.routes");
const Student = db.student;
const Guardian = db.guardian
const Op = db.Sequelize.Op;

// Create and Save a new student
exports.create = (req, res) => {
  
};

// Retrieve all students from the database.
exports.findAll = (req, res) => {
  
};

// Find a single student with an id
exports.findOne = (req, res) => {
  
};

// Update a student by the id in the request
exports.update = (req, res) => {
  
};

// Delete a student with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all students from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published students
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
  
    // Create a student
    const student = {
      StudentID: req.body.StudentID,
      FirstName: req.body.FirstName,
      MiddleName: req.body.MiddleName,
      LastName: req.body.LastName,
      DOB: req.body.DOB,
      AddressLine1: req.body.AddressLine1,
      AddressLine2: req.body.AddressLine2,
      City: req.body.City,
      State: req.body.State,
      Zip: req.body.Zip,
      StudentStatusID: req.body.StudentStatusID,
      guardians : req.body.guardians
    };
  
    // Save student in the database
    if (!Array.isArray(student.guardians)) {
      console.log("Array is empty!") ;
    Student.create(student)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the student."
        });
      });
    }
    else {Student.create(student, {include: Guardian})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the student."
      });
    });}
  };

// bulk
 exports.createmany = (req, res) => {
    // Create a parent
    const students = req.body;
  
    // Save parent in the database
    Student.bulkCreate(students)
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
    const StudentID = req.query.StudentID;
  
    Student.findAll({include: guardian })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving students."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Student.findByPk(id,{include: Guardian})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Student.update(req.body, {
      where: { StudentID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "student was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update student with id=${id}. Maybe student was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating student with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Student.destroy({
      where: { StudentID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "student was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete student with id=${id}. Maybe student was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete student with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Student.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} students were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all students."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Student.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving students."
        });
      });
  };
