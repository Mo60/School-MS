module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("course", {
    
    CourseID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    CourseName: {
      type: Sequelize.STRING
    },
    Description: {
      type: Sequelize.STRING
    },
    CourseStatusID: {
      type: Sequelize.INTEGER,
            references: {
          model: 'courseStatus', 
          key: 'CourseStatusID', 
        }
    }
  
  }, 
  { tableName: "course",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Course;
};
