module.exports = (sequelize, Sequelize) => {
  const Day = sequelize.define("day", {
    DayID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    WeekDay: {
      type: Sequelize.STRING
      },
    IsDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      }
  }, 
  {tableName: "day",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Day;
};
