module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("guardian_student", {
    
    
    _id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    CanPickup: {
      type: Sequelize.BOOLEAN
    }
  }, 
  { tableName: "guardian_student",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Student;
};
