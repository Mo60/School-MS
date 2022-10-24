module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payment", {
    PaymentID: {
      type: Sequelize.INTEGER
    },
    PaymentMethod: {
      type: Sequelize.STRING
    },
    Amount: {
      type: Sequelize.DECIMAL
    },
    Date: {
      type: Sequelize.DATE
    },
    InvoiceID: {
      type: Sequelize.INTEGER
    }
  });

  return Payment;
};
