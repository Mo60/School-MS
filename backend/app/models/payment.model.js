module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payment", {
    PaymentID: {
      type: Sequelize.STRING
    },
    PaymentMethod: {
      type: Sequelize.STRING
    },
    Amount: {
      type: Sequelize.STRING
    },
    Date: {
      type: Sequelize.STRING
    },
    InvoiceID: {
      type: Sequelize.STRING
    }
  });

  return Payment;
};
