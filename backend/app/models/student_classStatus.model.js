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
    IsDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      }
  },
                           
                               
  {tableName: "student_classStatus",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Student_ClassStatus;
};
