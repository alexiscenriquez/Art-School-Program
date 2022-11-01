module.exports = (sequelize, Sequelize) => {
  const GuardianRelationship = sequelize.define("guardianRealationship", {
    
    
    RelationshipID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    status: {
      type: Sequelize.STRING
    }
  }, 
  { tableName: "guardianRelationship",
  timestamps: false,
  createdAt: false,
  updatedAt: false,});

  return GuardianRelationship;
};
