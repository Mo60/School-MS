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
    MiddleName: {
      type: Sequelize.STRING
    },
    LastName: {
      type: Sequelize.STRING
    },
    DOB: {
      type: Sequelize.STRING
    },
    AddressLine1: {
      type: Sequelize.STRING
    },
    AddressLine2: {
      type: Sequelize.STRING
    },
    City: {
      type: Sequelize.STRING
    },
    State: {
      type: Sequelize.STRING
    },
    Zip: {
      type: Sequelize.INTEGER
    },
    StudentStatusID: {
      type: Sequelize.INTEGER,
            references: {
          model: 'studentStatus', 
          key: 'StudentStatusID', 
        }
     },
      
  
  }, 
  { tableName: "student",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Student;
};
