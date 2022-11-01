module.exports = (sequelize, Sequelize) => {
  const Days = sequelize.define("days", {
    DayID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  }, 
  {tableName: "days",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Days;
};
