module.exports = (sequelize, Sequelize) => {
  const Class = sequelize.define("class", {
    ClassID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    CourseID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'course', 
          key: 'CourseID', 
        }
    },
    SemesterID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'semester', 
          key: 'SemesterID', 
        }
    },
    TimeBlockID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'timeblock', 
          key: 'TimeBlockID', 
        }
    },
    DayID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'day', 
          key: 'DayID', 
        }
    },
    ClassStatusID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'classStatus', 
          key: 'ClassStatusID', 
        }
    },
    Capacity: {
      type: Sequelize.INTEGER
    }
  }, 
  {tableName: "class",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Class;
};
