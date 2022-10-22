module.exports = (sequelize, Sequelize) => {
  const Class = sequelize.define("class", {
    ClassID: {
      type: Sequelize.STRING
    },
    TeacherID: {
      type: Sequelize.STRING
    },
    ClassDate: {
      type: Sequelize.STRING
    },
    ClassTime: {
      type: Sequelize.STRING
    },
    NumStudents: {
      type: Sequelize.STRING
    },
    MaxCapacity: {
      type: Sequelize.STRING
    },
    Notes: {
      type: Sequelize.STRING
      }
  });

  return Class;
};
