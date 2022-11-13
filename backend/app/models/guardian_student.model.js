module.exports = (sequelize, Sequelize) => {
  const Guardian_student = sequelize.define("guardian_student", {
    
    _id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    GuardianID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'guardian', 
          key: 'GuardianID', 
        }
    },
    StudentID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'student', 
          key: 'StudentID', 
        }
    },
    RelationshipID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'guardianRelationship', 
          key: 'RelationshipID', 
        }
    },
    CanPickup: {
      type: Sequelize.BOOLEAN
    },
    IsEmergency: {
      type: Sequelize.BOOLEAN
    },
      
  }, 
  { tableName: "guardian_student",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Guardian_student;
};
