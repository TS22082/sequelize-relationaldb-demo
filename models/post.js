module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    text: DataTypes.STRING,
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Post;
};
