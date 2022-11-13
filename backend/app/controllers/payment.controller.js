const db = require("../models");
const Payment = db.payment;
const Op = db.Sequelize.Op;

// Create and Save a new payment
exports.create = (req, res) => {
  
};

// Retrieve all payments from the database.
exports.findAll = (req, res) => {
  
};

// Find a single payment with an id
exports.findOne = (req, res) => {
  
};

// Update a payment by the id in the request
exports.update = (req, res) => {
  
};

// Delete a payment with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all payments from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published payments
exports.findAllPublished = (req, res) => {
  
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body.Amount) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a payment
    const payment = {
      PaymentID: req.body.PaymentID,
      PaymentMethod: req.body.PaymentMethod,
      Amount: req.body.Amount,
      Date: req.body.Date,
      InvoiceID: req.body.InvoiceID
    };
  
    // Save payment in the database
    Payment.create(payment)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the payment."
        });
      });
  };

  exports.findAll = (req, res) => {
    const PaymentID = req.query.PaymentID;
    var condition = PaymentID ? { PaymentID: { [Op.like]: `%${PaymentID}%` } } : null;
  
    Payment.findAll(   )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving payments."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Payment.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving payment with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Payment.update(req.body, {
      where: { PaymentID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "payment was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update payment with id=${id}. Maybe payment was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating payment with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Payment.destroy({
      where: { PaymentID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "payment was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete payment with id=${id}. Maybe payment was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete payment with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Payment.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} payments were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all payments."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Payment.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving payments."
        });
      });
  };
