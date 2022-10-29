module.exports = (sequelize, Sequelize) => {
  const Enrollment = sequelize.define("enrollment", {
    EnrollmentID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    ClassID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'class', 
          key: 'ClassID',
      } 
    },
    StudentID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'student', 
          key: 'StudentID',
      } 
    }
  }
  , 
    
  {tableName: "enrollment",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Enrollment;


};
