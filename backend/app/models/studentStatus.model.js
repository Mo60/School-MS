module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("studentStatus", {
    
    
    StudentStatusID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    status: {
      type: Sequelize.STRING
    }
  }, 
  { tableName: "studentStatus",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Student;
};
