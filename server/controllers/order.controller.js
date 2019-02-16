import OrderService from '../services/order.service';

const OrderController = {
  placeAnOrder(req, res) {
    const selectedMeal = req.body;
    const order = OrderService.placeOrder((selectedMeal));
    if (Object.entries(order).length !== 0) {
      return res.json({
        status: 'success',
        data: order,
      }).status(200);
    }
    return res.json({
      status: 'Error',
      message: 'Meal Unavailable',
    }).status(400);
  },

  fetchAllOrders(req, res) {
    const allOrders = OrderService.getAllOrders();
    return res.json({
      status: 'success',
      data: allOrders,
    }).status(200);
  },

  editAnOrder(req, res) {
    const { id } = req.params;
    const info = req.body;
    const editedOrder = OrderService.editOrder(id, info);

    if (Object.entries(editedOrder).length !== 0) {
      return res.json({
        status: 'success',
        data: editedOrder,
      }).status(200);
    }
    return res.json({
      status: 'Error',
      message: 'No order with that id found',
    }).status(400);
  },
};

export default OrderController;
