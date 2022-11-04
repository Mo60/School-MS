module.exports = (sequelize, Sequelize) => {
  const Day = sequelize.define("day", {
    DayID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    WeekDay: {
      type: Sequelize.STRING
      }
    }, 
  }, 
  {tableName: "days",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Day;
};
