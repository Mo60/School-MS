module.exports = (sequelize, Sequelize) => {
  const Student_ClassStatus = sequelize.define("student_classStatus", {
    StudentClassStatusID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Status: {
      type: Sequelize.STRING
    },
      
  },
                           
                               
  {tableName: "student_classStatus",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Student_ClassStatus;
};
