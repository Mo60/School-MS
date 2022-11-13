module.exports = (sequelize, Sequelize) => {
  const Medical = sequelize.define("medical", {
    
    MedicalID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Condition: {
      type: Sequelize.STRING
    },
      
  
  }, 
  { tableName: "medical",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Medical;
};
