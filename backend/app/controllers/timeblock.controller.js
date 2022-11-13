const db = require("../models");
const Timeblock = db.timeblock;
const Op = db.Sequelize.Op;

// Create and Save a new timeblock
exports.create = (req, res) => {
  
};

// Retrieve all timeblocks from the database.
exports.findAll = (req, res) => {
  
};

// Find a single timeblock with an id
exports.findOne = (req, res) => {
  
};

// Update a timeblock by the id in the request
exports.update = (req, res) => {
  
};

// Delete a timeblock with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all timeblocks from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a timeblock
    const timeblock = {
      TimeblockID: req.body.TimeblockID,
      StartTime: req.body.StartTime,
      EndTime: req.body.EndTime
    };
  
    // Save timeblock in the database
    Timeblock.create(timeblock)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the timeblockRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a timeblock
    const timeblocks = req.body;
  
    // Save timeblock in the database
    Timeblock.bulkCreate(timeblocks)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the timeblock."
        });
      });
  };

  exports.findAll = (req, res) => {
    Timeblock.findAll(   )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving timeblocks."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Timeblock.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving timeblock_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Timeblock.update(req.body, {
      where: { TimeblockID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "timeblock was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update timeblock with id=${id}. Maybe timeblock was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating timeblock with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Timeblock.destroy({
      where: { TimeblockID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "timeblock was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete timeblock with id=${id}. Maybe timeblock was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete timeblock with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Timeblock.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} timeblocks were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all timeblocks."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Timeblock.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving timeblocks."
        });
      });
  };
