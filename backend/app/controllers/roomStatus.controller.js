const db = require("../models");
const RoomStatus = db.roomStatus;
const Op = db.Sequelize.Op;

// Create and Save a new guardian
exports.create = (req, res) => {
  
};

// Retrieve all guardians from the database.
exports.findAll = (req, res) => {
  
};

// Find a single guardian with an id
exports.findOne = (req, res) => {
  
};

// Update a guardian by the id in the request
exports.update = (req, res) => {
  
};

// Delete a guardian with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all guardians from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a guardian
    const roomStatus = {
      RoomStatusID: req.body.RoomStatusID,
      Status: req.body.Status
    };
  
    // Save guardian in the database
    RoomStatus.create(roomStatus)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the guardianRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a guardian
    const roomStatuses = req.body;
  
    // Save guardian in the database
    RoomStatus.bulkCreate(roomStatuses)
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

  exports.findAll = (req, res) => {
    RoomStatus.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving guardians."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    RoomStatus.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Guardian_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    RoomStatus.update(req.body, {
      where: { _id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "guardian was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update guardian with id=${id}. Maybe guardian was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating guardian with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    RoomStatus.destroy({
      where: { _id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "guardian was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete guardian with id=${id}. Maybe guardian was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete guardian with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    RoomStatus.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} guardians were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all guardians."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    RoomStatus.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving guardians."
        });
      });
  };
