module.exports = (sequelize, Sequelize) => {
  const Invoice = sequelize.define("invoice", {
    InvoiceID: {
      type: Sequelize.STRING
    },
    Total: {
      type: Sequelize.STRING
    },
    TotalPayment: {
      type: Sequelize.STRING
    },
    DueDate: {
      type: Sequelize.STRING
    },
    StudentID: {
      type: Sequelize.STRING
    }
  });

  return Invoice;
};
