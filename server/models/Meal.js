const meal = (sequelize, DataTypes) => {
  const Meal = sequelize.define('meal', {
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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      default: null,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Meal.associate = (models) => {
    Meal.belongsTo(models.Caterer, { onDelete: 'CASCADE' });
  };

  return Meal;
};

export default meal;
