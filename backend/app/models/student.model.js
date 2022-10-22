module.exports = (sequelize, Sequelize) => {
  const Students = sequelize.define("students", {
    StudentID: {
      type: Sequelize.STRING
    },
    FirstName: {
      type: Sequelize.STRING
    },
    LastName: {
      type: Sequelize.STRING
    },
    DOB: {
      type: Sequelize.STRING
    },
    StartDate: {
      type: Sequelize.STRING
    },
    EmergencyContactName: {
      type: Sequelize.STRING
    },
    EmergencyContactPhone: {
      type: Sequelize.STRING
    },
    Medical: {
      type: Sequelize.STRING
    },
    Notes: {
      type: Sequelize.STRING
    },
    LessonDay: {
      type: Sequelize.STRING
    },
    LessonTime: {
      type: Sequelize.STRING
    },
    ParentsID: {
      type: Sequelize.STRING
      }
  });

  return Student;
};
