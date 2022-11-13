module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define("location", {
    LocationID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    LocationName: {
      type: Sequelize.STRING
    },
    LocationStatusID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'locationStatus', 
          key: 'LocationStatusID', 
        }
    },
      
  }, 
                           
                               
  {tableName: "location",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Location;
};
