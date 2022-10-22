module.exports = (sequelize, Sequelize) => {
  const Enrollment = sequelize.define("enrollments", {
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

  return Enrollments;
};
