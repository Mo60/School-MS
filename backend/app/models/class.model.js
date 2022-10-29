module.exports = (sequelize, Sequelize) => {
  const Class = sequelize.define("class", {
    ClassID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    TeacherID: {
      type: Sequelize.INTEGER
    },
    ClassDay: {
      type: Sequelize.STRING
    },
    ClassStartDate: {
      type: Sequelize.DATE
    },
    ClassEndDate: {
      type: Sequelize.DATE
    },
    ClassTime: {
      type: Sequelize.TIME
    },
    NumStudents: {
      type: Sequelize.INTEGER
    },
    MaxCapacity: {
      type: Sequelize.INTEGER
    },
    Notes: {
      type: Sequelize.STRING
      },
  Lesson: {
      type: Sequelize.STRING
      }
  }, 
  {tableName: "class",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Class;
};
