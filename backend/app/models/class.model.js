module.exports = (sequelize, Sequelize) => {
  const Class = sequelize.define("class", {
    ClassID: {
      type: Sequelize.INTEGER
    },
    TeacherID: {
      type: Sequelize.INTEGER
    },
    ClassDate: {
      type: Sequelize.STRING
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
      }
  });

  return Class;
};
