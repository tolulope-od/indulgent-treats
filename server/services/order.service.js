import Order from '../models/order.model';
import dummyData from '../utils/dummyData';

const { menu, orders } = dummyData;

const OrderService = {
  placeOrder(order) {
    // eslint-disable-next-line eqeqeq
    const foundMeal = menu.find(meal => meal.id == order.id);

    if (foundMeal) {
      const newOrder = new Order();

      newOrder.id = foundMeal.id;
      newOrder.orderName = foundMeal.name;
      newOrder.status = 'processing';
      newOrder.amount = foundMeal.price;

      orders.push(newOrder);
      return newOrder;
    } return {};
  },

  getAllOrders() {
    return orders;
  },

  editOrder(id, newInfo) {
    // eslint-disable-next-line eqeqeq
    const toEdit = orders.find(order => order.id == id);

    if (toEdit) {
      toEdit.status = newInfo.status;

      return toEdit;
    } return {};
  },

};

export default OrderService;
