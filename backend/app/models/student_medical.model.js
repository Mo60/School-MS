module.exports = (sequelize, Sequelize) => {
  const Student_Medical = sequelize.define("student_medical", {
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
    MedicalID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'medical', 
          key: 'MedicalID', 
        }
    },
    Description: {
      type: Sequelize.STRING
    },
    StudentMedicalStatusID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'student_medicalStatus', 
          key: 'StudentMedicalStatusID', 
        }
    },
      
  }, 
                           
                               
  {tableName: "student_medical",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Student_Medical;
};
