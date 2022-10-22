module.exports = (sequelize, Sequelize) => {
  const Enrollment = sequelize.define("enrollment", {
    EnrollmentID: {
      type: Sequelize.STRING
    },
    ClassID: {
      type: Sequelize.STRING
    },
    StudentID: {
      type: Sequelize.STRING
    }
  });

  return Enrollment;
};
