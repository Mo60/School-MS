const db = require("../models");
const CourseStatus = db.courseStatus;
const Op = db.Sequelize.Op;

// Create and Save a new courseStatus
exports.create = (req, res) => {
  
};

// Retrieve all courseStatuss from the database.
exports.findAll = (req, res) => {
  
};

// Find a single courseStatus with an id
exports.findOne = (req, res) => {
  
};

// Update a courseStatus by the id in the request
exports.update = (req, res) => {
  
};

// Delete a courseStatus with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all courseStatuss from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a courseStatus
    const courseStatus = {
      CourseStatusID: req.body.CourseStatusID,
      Status: req.body.Status
    };
  
    // Save courseStatus in the database
    CourseStatus.create(courseStatus)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the courseStatusRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a courseStatus
    const courseStatuses = req.body;
  
    // Save courseStatus in the database
    CourseStatus.bulkCreate(courseStatus)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the courseStatus."
        });
      });
  };

  exports.findAll = (req, res) => {
    CourseStatus.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving courseStatuss."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    CourseStatus.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving courseStatus_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    CourseStatus.update(req.body, {
      where: { CourseStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "courseStatus was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update courseStatus with id=${id}. Maybe courseStatus was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating courseStatus with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    CourseStatus.destroy({
      where: { CourseStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "courseStatus was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete courseStatus with id=${id}. Maybe courseStatus was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete courseStatus with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    CourseStatus.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} courseStatuss were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all courseStatuss."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    CourseStatus.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving courseStatuss."
        });
      });
  };
