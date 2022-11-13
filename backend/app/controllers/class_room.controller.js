const db = require("../models");
const Class_Room = db.class_room;
const Op = db.Sequelize.Op;

// Create and Save a new class_room
exports.create = (req, res) => {
  
};

// Retrieve all class_rooms from the database.
exports.findAll = (req, res) => {
  
};

// Find a single class_room with an id
exports.findOne = (req, res) => {
  
};

// Update a class_room by the id in the request
exports.update = (req, res) => {
  
};

// Delete a class_room with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all class_rooms from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a class_room
    const class_room = {
      ClassID: req.body.ClassID,
      RoomID: req.body.RoomID,
      
    };
  
    // Save class_room in the database
    Class_Room.create(class_room)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the class_roomRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a class_room
    const class_rooms = req.body;
  
    // Save class_room in the database
    Class_Room.bulkCreate(class_rooms)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the class_room."
        });
      });
  };

  exports.findAll = (req, res) => {
    Class_Room.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving class_rooms."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Class_Room.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving class_room_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Class_Room.update(req.body, {
      where: { _id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "class_room was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update class_room with id=${id}. Maybe class_room was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating class_room with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Class_Room.destroy({
      where: { _id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "class_room was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete class_room with id=${id}. Maybe class_room was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete class_room with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Class_Room.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} class_rooms were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all class_rooms."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Class_Room.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving class_rooms."
        });
      });
  };
