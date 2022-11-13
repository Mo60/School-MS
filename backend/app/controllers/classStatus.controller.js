const db = require("../models");
const ClassStatus = db.classStatus;
const Op = db.Sequelize.Op;

// Create and Save a new classStatus
exports.create = (req, res) => {
  
};

// Retrieve all classStatuss from the database.
exports.findAll = (req, res) => {
  
};

// Find a single classStatus with an id
exports.findOne = (req, res) => {
  
};

// Update a classStatus by the id in the request
exports.update = (req, res) => {
  
};

// Delete a classStatus with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all classStatuss from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a classStatus
    const classStatus = {
      ClassStatusID: req.body.ClassStatusID,
      Status: req.body.Status,
     
    };
  
    // Save classStatus in the database
    ClassStatus.create(classStatus)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the classStatusRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a classStatus
    const classStatuses = req.body;
  
    // Save classStatus in the database
    ClassStatus.bulkCreate(classStatuses)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the classStatus."
        });
      });
  };

  exports.findAll = (req, res) => {
    ClassStatus.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving classStatuss."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    ClassStatus.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving classStatus_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    ClassStatus.update(req.body, {
      where: { ClassStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "classStatus was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update classStatus with id=${id}. Maybe classStatus was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating classStatus with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    ClassStatus.destroy({
      where: { ClassStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "classStatus was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete classStatus with id=${id}. Maybe classStatus was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete classStatus with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    ClassStatus.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} classStatuss were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all classStatuss."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    ClassStatus.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving classStatuss."
        });
      });
  };
