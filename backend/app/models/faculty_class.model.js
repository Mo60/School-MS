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
          model: 'ClassID', 
          key: 'class', 
        }
    },
    FacultyID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'FacultyID', 
          key: 'faculty', 
        }
        }
    },
  }, 
  { tableName: "faculty_class",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Faculty_Class;
};
