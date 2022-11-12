module.exports = (sequelize, Sequelize) => {
  const RoomStatus = sequelize.define("roomStatus", {
    RoomStatusID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Status: {
      type: Sequelize.STRING
    },
    IsDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      }
  },
                           
                               
  {tableName: "roomStatus",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return RoomStatus;
};
