module.exports = (sequelize, Sequelize) => {
  const Timeblock = sequelize.define("timeblock", {
    TimeblockID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    StartTime: {
      type: Sequelize.STRING
    },
    EndTime: {
      type: Sequelize.STRING
    },
      
  }, 
  {tableName: "timeblock",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Timeblock;
};
