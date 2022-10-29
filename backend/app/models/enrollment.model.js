module.exports = (sequelize, Sequelize) => {
  const Enrollment = sequelize.define("enrollment", {
    EnrollmentID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    ClassID: {
      type: Sequelize.INTEGER
    },
    StudentID: {
      type: Sequelize.INTEGER
    }
  }, 
  {tableName: "enrollment",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return Enrollment;
};
