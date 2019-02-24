const order = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    order: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      default: 'processing',
    },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Caterer, { onDelete: 'CASCADE' });
  };

  return Order;
};

export default order;
