module.exports = (sequelize, Sequelize) => {
  const Enrollment = sequelize.define("enrollment", {
    EnrollmentID: {
      type: Sequelize.INTEGER
    },
    ClassID: {
      type: Sequelize.INTEGER
    },
    StudentID: {
      type: Sequelize.INTEGER
    }
  });

  return Enrollment;
};
