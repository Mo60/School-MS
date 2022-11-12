module.exports = (sequelize, Sequelize) => {
  const GuardianStatus = sequelize.define("guardianStatus", {
    
    GuardianStatusID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Status: {
      type: Sequelize.STRING
    },
    IsDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
    }
  }, 
  { tableName: "guardianStatus",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return GuardianStatus;
};
