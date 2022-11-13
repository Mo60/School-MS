const db = require("../models");
const Course = db.course;
const Op = db.Sequelize.Op;

// Create and Save a new course
exports.create = (req, res) => {
  
};

// Retrieve all courses from the database.
exports.findAll = (req, res) => {
  
};

// Find a single course with an id
exports.findOne = (req, res) => {
  
};

// Update a course by the id in the request
exports.update = (req, res) => {
  
};

// Delete a course with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all courses from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a course
    const course = {
      CourseID: req.body.CourseID,
      CourseName: req.body.CourseName,
      Description: req.body.Description,
      CourseStatusID: req.body.CourseStatusID
    };
  
    // Save course in the database
    Course.create(course)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the courseRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a course
    const courses = req.body;
  
    // Save course in the database
    Course.bulkCreate(courses)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the course."
        });
      });
  };

  exports.findAll = (req, res) => {
    Course.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving courses."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Course.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving course_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Course.update(req.body, {
      where: { CourseID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "course was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update course with id=${id}. Maybe course was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating course with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Course.destroy({
      where: { CourseID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "course was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete course with id=${id}. Maybe course was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete course with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Course.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} courses were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all courses."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Course.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving courses."
        });
      });
  };
