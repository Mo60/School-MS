module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    UserID: {
      type: Sequelize.STRING
    },
    Username: {
      type: Sequelize.STRING
    },
    Password: {
      type: Sequelize.STRING
    }
  });

  return User;
};
