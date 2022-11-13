module.exports = (sequelize, Sequelize) => {
  const CourseStatus = sequelize.define("courseStatus", {
    
    CourseStatusID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Status: {
      type: Sequelize.STRING
    }
  
  }, 
  { tableName: "courseStatus",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return CourseStatus;
};
