module.exports = (sequelize, Sequelize) => {
  const Guardian = sequelize.define("guardian", {
    GuardianID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    FirstName: {
      type: Sequelize.STRING
    },
    MiddleName: {
      type: Sequelize.STRING
    },
    LastName: {
      type: Sequelize.STRING
    },
    DOB: {
      type: Sequelize.STRING
    },
    CellNumber: {
      type: Sequelize.STRING
    },
    PhoneNumber: {
      type: Sequelize.STRING
    },
    Email: {
      type: Sequelize.STRING
    },
    AddressLine1: {
      type: Sequelize.STRING
    },
    AddressLine2: {
      type: Sequelize.STRING
    },
    City: {
      type: Sequelize.STRING
    },
    State: {
      type: Sequelize.STRING
    },
    Zip: {
      type: Sequelize.INTEGER
    },
    Notes: {
      type: Sequelize.STRING
    },
    GuardianStatusID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'guardianStatus', 
          key: 'GuardianStatusID', 
        }
     },
      
    },
                           
                               
  {tableName: "guardian",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Guardian;
};
