const db = require("../models");
const Invoice = db.invoice;
const Op = db.Sequelize.Op;

// Create and Save a new invoice
exports.create = (req, res) => {
  
};

// Retrieve all invoices from the database.
exports.findAll = (req, res) => {
  
};

// Find a single invoice with an id
exports.findOne = (req, res) => {
  
};

// Update a invoice by the id in the request
exports.update = (req, res) => {
  
};

// Delete a invoice with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all invoices from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published invoices
exports.findAllPublished = (req, res) => {
  
};

exports.create = (req, res) => {
    // Validate request
    // if (!req.body.InvoiceID) {
    //   res.status(400).send({
    //     message: "Content can not be empty!"
    //   });
    //   return;
    // }
  
    // Create a invoice
    const invoice = {
      InvoiceID: req.body.InvoiceID,
      Total: req.body.Total,
      TotalPayment: req.body.TotalPayment,
      DueDate: req.body.DueDate,
      StudentID: req.body.StudentID
    };
  
    // Save invoice in the database
    Invoice.create(invoice)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the invoice."
        });
      });
  };

  exports.findAll = (req, res) => {
    Invoice.findAll(   )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving invoices."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    
    Invoice.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving invoice with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Invoice.update(req.body, {
      where: { InvoiceID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "invoice was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update invoice with id=${id}. Maybe invoice was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating invoice with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Invoice.destroy({
      where: { InvoiceID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "invoice was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete invoice with id=${id}. Maybe invoice was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete invoice with id=" + id
        });
      });
  };

  
  exports.deleteAll = (req, res) => {
    Invoice.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} invoices were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all invoices."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Invoice.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving invoices."
        });
      });
  };
