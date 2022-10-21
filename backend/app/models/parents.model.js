module.exports = (sequelize, Sequelize) => {
  const Parents = sequelize.define("parents", {
    ParentsID: {
      type: Sequelize.STRING
    },
    ParentName: {
      type: Sequelize.STRING
    },
    FirstName: {
      type: Sequelize.STRING
    },
    LastName: {
      type: Sequelize.STRING
    },
    ParentPhoneNumber: {
      type: Sequelize.STRING
    },
    Email: {
      type: Sequelize.STRING
    },
    Notes: {
      type: Sequelize.STRING
  });

  return Parents;
};
