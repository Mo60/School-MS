const db = require("../models");
const Day = db.day;
const Op = db.Sequelize.Op;

// Create and Save a new day
exports.create = (req, res) => {
  
};

// Retrieve all days from the database.
exports.findAll = (req, res) => {
  
};

// Find a single day with an id
exports.findOne = (req, res) => {
  
};

// Update a day by the id in the request
exports.update = (req, res) => {
  
};

// Delete a day with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all days from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a day
    const day = {
      DayID: req.body.DayID,
      WeekDay: req.body.WeekDay
    };
  
    // Save day in the database
    Day.create(day)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the dayRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a day
    const days = req.body;
  
    // Save day in the database
    Day.bulkCreate(days)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the day."
        });
      });
  };

  exports.findAll = (req, res) => {
    Day.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving days."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Day.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving day_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Day.update(req.body, {
      where: { DayID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "day was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update day with id=${id}. Maybe day was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating day with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Day.destroy({
      where: { DayID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "day was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete day with id=${id}. Maybe day was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete day with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Day.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} days were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all days."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Day.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving days."
        });
      });
  };
