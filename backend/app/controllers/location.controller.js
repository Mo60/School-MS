const db = require("../models");
const Location = db.location;
const Op = db.Sequelize.Op;

// Create and Save a new location
exports.create = (req, res) => {
  
};

// Retrieve all locations from the database.
exports.findAll = (req, res) => {
  
};

// Find a single location with an id
exports.findOne = (req, res) => {
  
};

// Update a location by the id in the request
exports.update = (req, res) => {
  
};

// Delete a location with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all locations from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a location
    const location = {
      LocationID: req.body.LocationID,
      LocationName: req.body.LocationName,
      LocationStatusID: req.body.LocationStatusID
    };
  
    // Save location in the database
    Location.create(location)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the locationRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a location
    const locations = req.body;
  
    // Save location in the database
    Location.bulkCreate(locations)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the location."
        });
      });
  };

  exports.findAll = (req, res) => {
    Location.findAll(   )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving locations."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Location.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving location_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Location.update(req.body, {
      where: { LocationID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "location was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update location with id=${id}. Maybe location was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating location with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Location.destroy({
      where: { LocationID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "location was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete location with id=${id}. Maybe location was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete location with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Location.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} locations were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all locations."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Location.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving locations."
        });
      });
  };
