module.exports = (sequelize, Sequelize) => {
  const Teacher = sequelize.define("teacher", {
    TeacherID: {
      type: Sequelize.INTEGER
    },
    FirstName: {
      type: Sequelize.STRING
    },
    LastName: {
      type: Sequelize.STRING
    },
    TeacherPhoneNumber: {
      type: Sequelize.STRING
    },
    TeacherEmail: {
      type: Sequelize.STRING
    },
    Notes: {
      type: Sequelize.STRING
      }
  });

  return Teacher;
};
