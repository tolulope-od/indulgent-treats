const caterer = (sequelize, DataTypes) => {
  const Caterer = sequelize.define('caterer', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Caterer.associate = (models) => {
    Caterer.hasMany(models.Meal, { onDelete: 'CASCADE' });
  };

  return Caterer;
};

export default caterer;
