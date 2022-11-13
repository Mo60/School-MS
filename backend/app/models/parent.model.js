module.exports = (sequelize, Sequelize) => {
  const Parent = sequelize.define("parent", {
    ParentsID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    FirstName: {
      type: Sequelize.STRING
    },
    LastName: {
      type: Sequelize.STRING
    },
    PhoneType: {
      type: Sequelize.STRING
    },
    PhoneNumber: {
      type: Sequelize.STRING
    },
    Email: {
      type: Sequelize.STRING
    },
    Street: {
      type: Sequelize.STRING
    },
    City: {
      type: Sequelize.STRING
    },
    Zip: {
      type: Sequelize.INTEGER
    },
    Reference: {
      type: Sequelize.STRING
    },
    Notes: {
      type: Sequelize.STRING
      },
      
  }
  , 
  {tableName: "parent",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Parent;
};
