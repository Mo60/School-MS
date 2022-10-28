module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    UserID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
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
