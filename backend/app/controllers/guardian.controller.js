const db = require("../models");
const Guardian = db.guardian;
const Student = db.student;
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
    const guardian = {
      GuardianID: req.body.GuardianID,
      FirstName: req.body.FirstName,
      MiddleName: req.body.MiddleName,
      LastName: req.body.LastName,
      DOB: req.body.DOB,
      CellNumber: req.body.CellNumber,
      PhoneNumber: req.body.PhoneNumber,
      Email: req.body.Email,
      AddressLine1: req.body.AddressLine1,
      AddressLine2: req.body.AddressLine2,
      City: req.body.City,
      State: req.body.State,
      Zip: req.body.Zip,
      Notes: req.body.Notes,
      IsEmergency: req.body.IsEmergency,
      GuardianStatusID: req.body.GuardianStatusID,
      students: req.body.students
    };
  
    // Save guardian in the database
 
    if (!guardian.students) {
       console.log("Array is empty!") ;
    Guardian.create(guardian)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the guardian."
      });
    });
  }
   else { 
    console.log(guardian.students) ;
    Guardian.create(guardian,{include: Student})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the guardian."
        });
      });
    }

  };
// bulk
 exports.createmany = (req, res) => {
    // Create a guardian
    const guardians = req.body;
  
    // Save guardian in the database
    Guardian.bulkCreate(guardians)
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
    const GuardianID = req.query.GuardianID;

    Guardian.findAll({ include: Student })
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
  
    Guardian.findByPk(id,{include: Student})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving guardian with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Guardian.update(req.body, {
      where: { GuardianID: id }
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
  
    Guardian.destroy({
      where: { GuardianID: id }
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
    Guardian.destroy({
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
    Guardian.findAll({ where: { published: true } })
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
