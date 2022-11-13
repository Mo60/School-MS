module.exports = (sequelize, Sequelize) => {
  const LocationStatus = sequelize.define("locationStatus", {
    LocationStatusID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Status: {
      type: Sequelize.STRING
    },
      
  },
                           
                               
  {tableName: "locationStatus",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return LocationStatus;
};
