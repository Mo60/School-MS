module.exports = (sequelize, Sequelize) => {
  const StudentStatus = sequelize.define("studentStatus", {
    
    StudentStatusID: {
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
  { tableName: "studentStatus",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return StudentStatus;
};
