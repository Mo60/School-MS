module.exports = (sequelize, Sequelize) => {
  const Faculty = sequelize.define("faculty", {
    FacultyID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    FirstName: {
      type: Sequelize.STRING
    },
    MiddleName: {
      type: Sequelize.STRING
    },
    LastName: {
      type: Sequelize.STRING
    },
    CellNumber: {
      type: Sequelize.STRING
    },
    PhoneNumber: {
      type: Sequelize.STRING
    },
    Email: {
      type: Sequelize.STRING
    },
    Title: {
      type: Sequelize.STRING
    },
    FacultyStatusID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'facultyStatus', 
          key: 'FacultyStatusID', 
        }
    },
      
  },
                           
                               
  {tableName: "faculty",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Faculty;
};
