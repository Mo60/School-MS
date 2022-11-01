module.exports = (sequelize, Sequelize) => {
  const GuardianStatus = sequelize.define("guardianStatus", {
    
    
    GuardianStatusID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    status: {
      type: Sequelize.STRING
    }
  }, 
  { tableName: "guardianStatus",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return GuardianStatus;
};
