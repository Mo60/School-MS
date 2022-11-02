module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("guardian_student", {
    
    
    _id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    CanPickup: {
      type: Sequelize.BOOLEAN
    },
    RelationshipID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'guardianRelationship', 
          key: 'RelationshipID', 
        }
    }
  }, 
  { tableName: "guardian_student",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Student;
};
