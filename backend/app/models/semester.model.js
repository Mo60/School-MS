module.exports = (sequelize, Sequelize) => {
  const Semester = sequelize.define("semester", {
    SemesterID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Semester: {
      type: Sequelize.STRING
    },
    IsDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      }
  }, 
  {tableName: "semester",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Semester;
};
