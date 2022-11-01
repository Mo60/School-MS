module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {
    
    
    StudentID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    FirstName: {
      type: Sequelize.STRING
    },
    LastName: {
      type: Sequelize.STRING
    },
    DOB: {
      type: Sequelize.STRING
    },
    Street: {
      type: Sequelize.STRING
    },
    City: {
      type: Sequelize.STRING
    },
    State: {
      type: Sequelize.STRING
    },
    Zip: {
      type: Sequelize.STRING
    },
    StudentStatusID: {
      type: Sequelize.INTEGER,
            references: {
          model: 'StudentStatus', 
          key: 'StudentStatusID', 
        }
        }
  
  }, 
  { tableName: "student",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Student;
};
