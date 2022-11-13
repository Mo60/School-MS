const db = require("../models");
const Medical = db.medical;
const Op = db.Sequelize.Op;

// Create and Save a new medical
exports.create = (req, res) => {
  
};

// Retrieve all medicals from the database.
exports.findAll = (req, res) => {
  
};

// Find a single medical with an id
exports.findOne = (req, res) => {
  
};

// Update a medical by the id in the request
exports.update = (req, res) => {
  
};

// Delete a medical with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all medicals from the database.
exports.deleteAll = (req, res) => {
  
};

;

exports.create = (req, res) => {
  
    // Create a medical
    const medical = {
      MedicalID: req.body.MedicalID,
      Condition: req.body.Condition
    };
  
    // Save medical in the database
    Medical.create(medical)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the medicalRelationship."
      });
    });
    }

  ;
// bulk
 exports.createmany = (req, res) => {
    // Create a medical
    const medicals = req.body;
  
    // Save medical in the database
    Medical.bulkCreate(medicals)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the medical."
        });
      });
  };

  exports.findAll = (req, res) => {
    Medical.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving medicals."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Medical.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving medical_student with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Medical.update(req.body, {
      where: { MedicalID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "medical was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update medical with id=${id}. Maybe medical was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating medical with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Medical.destroy({
      where: { MedicalID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "medical was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete medical with id=${id}. Maybe medical was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete medical with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Medical.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} medicals were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all medicals."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Medical.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving medicals."
        });
      });
  };
