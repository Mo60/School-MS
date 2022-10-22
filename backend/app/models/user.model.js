module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
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
