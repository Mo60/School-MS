module.exports = (sequelize, Sequelize) => {
  const Room = sequelize.define("room", {
    RoomID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    LocationID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'location', 
          key: 'LocationID', 
        }
    },
    Capacity: {
      type: Sequelize.INTEGER
    },
    RoomName: {
      type: Sequelize.STRING
    },
    RoomStatusID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'roomStatus', 
          key: 'RoomStatusID', 
        }
    },
      
  }, 
                           
                               
  {tableName: "room",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Room;
};
