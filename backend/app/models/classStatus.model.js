module.exports = (sequelize, Sequelize) => {
  const ClassStatus = sequelize.define("classStatus", {
    
    ClassStatusID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Status: {
      type: Sequelize.STRING
    }
  
  }, 
  { tableName: "classStatus",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return ClassStatus;
};
