module.exports = (sequelize, Sequelize) => {
  const Class_Room = sequelize.define("class_room", {
    _id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    ClassID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'class', 
          key: 'ClassID', 
        }
    },
    RoomID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'room', 
          key: 'RoomID', 
        }
    },
    IsDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      }
  },
                           
                               
  {tableName: "class_room",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Class_Room;
};
