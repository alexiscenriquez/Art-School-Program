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
      type: Sequelize.DATE
    },
    StartDate: {
      type: Sequelize.DATE
    },
    EmergencyContactName: {
      type: Sequelize.STRING
    },
    EmergencyContactPhone: {
      type: Sequelize.STRING
    },
    Medical: {
      type: Sequelize.STRING
    },
    Notes: {
      type: Sequelize.STRING
    },
    LessonDay: {
      type: Sequelize.STRING
    },
    LessonTime: {
      type: Sequelize.STRING
    },
    ParentsID: {
      type: Sequelize.INTEGER,
      references: {
          model: 'parent', 
          key: 'ParentsID', 
        }
        }
  
  }, 
  {tableName: "student",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Student;
};
