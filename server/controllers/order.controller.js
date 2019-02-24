import OrderService from '../dummyServices/order.service';

const OrderController = {
  placeAnOrder(req, res) {
    const selectedMeal = req.body;
    const order = OrderService.placeOrder((selectedMeal));
    if (Object.entries(order).length !== 0) {
      return res.status(200).json({
        status: 'success',
        data: order,
      });
    }
    return res.status(400).json({
      status: 'Error',
      message: 'Meal Unavailable',
    });
  },

  fetchAllOrders(req, res) {
    const allOrders = OrderService.getAllOrders();

    if (allOrders.length === 0) {
      return res.status(200).json({
        message: 'There are no orders at this time',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: allOrders,
    });
  },

  editAnOrder(req, res) {
    const { id } = req.params;
    const info = req.body;
    const editedOrder = OrderService.editOrder(id, info);

    if (Object.entries(editedOrder).length !== 0) {
      if (info.toString().toLowerCase() !== 'processing' || info.toString().toLowerCase() !== 'cancelled' || info.toString().toLowerCase() !== 'completed') {
        return res.status(200).json({
          message: 'You have not updated the Order',
        });
      }
      return res.status(200).json({
        status: 'success',
        data: editedOrder,
      });
    }
    return res.status(400).json({
      status: 'Error',
      message: 'No order with that id found',
    });
  },
};

export default OrderController;
