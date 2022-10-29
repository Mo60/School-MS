module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payment", {
    PaymentID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
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
      type: Sequelize.INTEGER,
      references: {
          model: 'invoice',
          key: 'InvoiceID',
        }
    }
  }, 
  {tableName: "payment",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Payment;
};
