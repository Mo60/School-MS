const db = require("../models");
const RoomStatus = db.roomStatus;
const Op = db.Sequelize.Op;

// Create and Save a new roomStatus
exports.create = (req, res) => {
  
};

// Retrieve all roomStatuss from the database.
exports.findAll = (req, res) => {
  
};

// Find a single roomStatus with an id
exports.findOne = (req, res) => {
  
};

// Update a roomStatus by the id in the request
exports.update = (req, res) => {
  
};

// Delete a roomStatus with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all roomStatuss from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a roomStatus
    const roomStatus = {
      RoomStatusID: req.body.RoomStatusID,
      Status: req.body.Status
    };
  
    // Save roomStatus in the database
    RoomStatus.create(roomStatus)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the roomStatusRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a roomStatus
    const roomStatuses = req.body;
  
    // Save roomStatus in the database
    RoomStatus.bulkCreate(roomStatuses)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the roomStatus."
        });
      });
  };

  exports.findAll = (req, res) => {
    RoomStatus.findAll(   )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving roomStatuss."
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
          message: "Error retrieving roomStatus_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    RoomStatus.update(req.body, {
      where: { RoomStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "roomStatus was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update roomStatus with id=${id}. Maybe roomStatus was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating roomStatus with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    RoomStatus.destroy({
      where: { RoomStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "roomStatus was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete roomStatus with id=${id}. Maybe roomStatus was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete roomStatus with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    RoomStatus.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} roomStatuss were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all roomStatuss."
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
            err.message || "Some error occurred while retrieving roomStatuss."
        });
      });
  };
