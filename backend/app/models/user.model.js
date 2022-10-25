module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    UserID: {
      type: Sequelize.INTEGER
    },
    Username: {
      type: Sequelize.STRING
    },
    Password: {
      type: Sequelize.STRING
    }
  }
  , 
  {tableName: "user" 
    });

  return User;
};
