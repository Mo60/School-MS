module.exports = (sequelize, Sequelize) => {
  const Invoice = sequelize.define("invoice", {
    InvoiceID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
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
      type: Sequelize.INTEGER,
      references: {
          model: 'student', 
          key: 'StudentID', 
        }
        }
  }, 
  {tableName: "invoice",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Invoice;
};
