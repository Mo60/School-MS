module.exports = (sequelize, Sequelize) => {
  const Invoice = sequelize.define("invoice", {
    InvoiceID: {
      type: Sequelize.INTEGER
    },
    Total: {
      type: Sequelize.DECIMAL
    },
    TotalPayment: {
      type: Sequelize.DECIMAL
    },
    DueDate: {
      type: Sequelize.DATE
    },
    StudentID: {
      type: Sequelize.INTEGER
    }
  });

  return Invoice;
};
