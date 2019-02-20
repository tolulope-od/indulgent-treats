const menu = (sequelize, DataTypes) => {
  const Menu = sequelize.define('menu', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    meals: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    day: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  Menu.associate = (models) => {
    Menu.belongsTo(models.Caterer, { onDelete: 'CASCADE' });
  };
  return Menu;
};

export default menu;
