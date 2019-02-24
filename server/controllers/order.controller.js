import models from '../models';

const { Order, Meal } = models;

const OrderController = {
  placeAnOrder(req, res) {
    const selectedMeal = req.body;
    Meal.findOne({ where: { id: selectedMeal.id } })
      .then((meal) => {
        Order.create({
          order: meal,
          amount: meal.price * selectedMeal.quantity,
          quantity: selectedMeal.quantity,
          address: selectedMeal.address,
        }).then(order => res.status(200).json({
          status: 'success',
          data: order,
        }));
      })
      .catch(err => res.status(400).json({
        status: 'Error',
        message: err,
      }));
  },

  fetchAllOrders(req, res) {
    Order.findAll().then(orders => res.status(200).json({
      status: 'success',
      data: orders,
    }));
  },

  editAnOrder(req, res) {
    const { id } = req.params;
    const newStatus = req.body;
    Order.findOne({ where: { id } })
      .then((order) => {
        if (!order) {
          return res.status(400).json({
            status: 'Error',
            message: 'No order with that id found',
          });
        }
        return Order.update({ status: newStatus.status }, { where: { id } })
          .then(() => res.status(200).json({
            status: 'success',
            data: order,
          }));
      });
  },
};

export default OrderController;
