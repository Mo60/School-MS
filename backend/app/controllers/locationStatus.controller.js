const db = require("../models");
const LocationStatus = db.locationStatus;
const Op = db.Sequelize.Op;

// Create and Save a new locationStatus
exports.create = (req, res) => {
  
};

// Retrieve all locationStatuss from the database.
exports.findAll = (req, res) => {
  
};

// Find a single locationStatus with an id
exports.findOne = (req, res) => {
  
};

// Update a locationStatus by the id in the request
exports.update = (req, res) => {
  
};

// Delete a locationStatus with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all locationStatuss from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a locationStatus
    const locationStatus = {
      LocationStatusID: req.body.LocationStatusID,
      Status: req.body.Status
    };
  
    // Save locationStatus in the database
    LocationStatus.create(locationStatus)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the locationStatus."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a locationStatus
    const locationStatuses = req.body;
  
    // Save locationStatus in the database
    LocationStatus.bulkCreate(locationStatuses)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the locationStatus."
        });
      });
  };

  exports.findAll = (req, res) => {
    LocationStatus.findAll(   )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving locationStatus."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    LocationStatus.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving locationStatus with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    LocationStatus.update(req.body, {
      where: {LocationStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "locationStatus was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update locationStatus with id=${id}. Maybe locationStatus was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating locationStatus with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    LocationStatus.destroy({
      where: { LocationStatusID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "locationStatus was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete locationStatus with id=${id}. Maybe locationStatus was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete locationStatus with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    LocationStatus.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} locationStatuss were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all locationStatuss."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    LocationStatus.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving locationStatuss."
        });
      });
  };
