module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define("Profile", {
    name: DataTypes.STRING
  });

  Profile.associate = models => {
    Profile.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Profile;
};
