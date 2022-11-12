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
    IsDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      }
  
  }, 
  { tableName: "medical",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Medical;
};
