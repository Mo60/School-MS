const db = require("../models");
const Room = db.room;
const Op = db.Sequelize.Op;

// Create and Save a new room
exports.create = (req, res) => {
  
};

// Retrieve all rooms from the database.
exports.findAll = (req, res) => {
  
};

// Find a single room with an id
exports.findOne = (req, res) => {
  
};

// Update a room by the id in the request
exports.update = (req, res) => {
  
};

// Delete a room with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all rooms from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a room
    const room = {
      RoomID: req.body.RoomID,
      LocationID: req.body.LocationID,
      Capacity: req.body.Capacity,
      RoomName: req.body.RoomName,
      RoomStatusID: req.body.RoomStatusID
    };
  
    // Save room in the database
    Room.create(room)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the room."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a room
    const rooms = req.body;
  
    // Save room in the database
    Room.bulkCreate(rooms)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the room."
        });
      });
  };

  exports.findAll = (req, res) => {
    Room.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving rooms."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Room.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving room_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Room.update(req.body, {
      where: { RoomID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "room was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update room with id=${id}. Maybe room was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating room with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Room.destroy({
      where: { RoomID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "room was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete room with id=${id}. Maybe room was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete room with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Room.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} rooms were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all rooms."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Room.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving rooms."
        });
      });
  };
