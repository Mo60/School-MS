module.exports = (sequelize, Sequelize) => {
  const Student_MedicalStatus = sequelize.define("student_medicalStatus", {
    
    StudentMedicalStatusID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Status: {
      type: Sequelize.STRING
    }
  
  }, 
  { tableName: "student_medicalStatus",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Student_MedicalStatus;
};
