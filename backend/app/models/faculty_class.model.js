module.exports = (sequelize, Sequelize) => {
  const Faculty_Class = sequelize.define("faculty_class", {
    
    _id: {
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
    FacultyID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'faculty', 
          key: 'FacultyID', 
        }
    },
    IsDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      }
  }, 
  { tableName: "faculty_class",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Faculty_Class;
};
