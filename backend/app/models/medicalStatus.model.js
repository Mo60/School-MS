module.exports = (sequelize, Sequelize) => {
  const MedicalStatus = sequelize.define("medicalStatus", {
    
    MedicalStatusID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Status: {
      type: Sequelize.STRING
    }
  
  }, 
  { tableName: "medicalStatus",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return MedicalStatus;
};
