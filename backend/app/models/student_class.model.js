module.exports = (sequelize, Sequelize) => {
  const Student_Class = sequelize.define("student_class", {
    
    _id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    StudentID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'student', 
          key: 'StudentID', 
        }
    },
    ClassID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'class', 
          key: 'ClassID', 
        }
    },
     StudentClassStatusID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'student_classStatus', 
          key: 'StudentClassStatusID', 
      }
    },
      
  }, 
  { tableName: "student_class",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Student_Class;
};
