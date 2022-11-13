module.exports = (sequelize, Sequelize) => {
  const FacultyStatus = sequelize.define("facultyStatus", {
    FacultyStatusID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Status: {
      type: Sequelize.STRING
    },
      
  },
                           
                               
  {tableName: "facultyStatus",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return FacultyStatus;
};
