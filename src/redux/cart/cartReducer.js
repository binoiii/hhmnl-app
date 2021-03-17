import { ADD_TO_CART, REMOVE_ITEM, CLEAR_CART } from "./cartTypes"

const getInitialCart = () => ({
  orderID: "",
  totalQuantity: 0,
  totalPrice: 0,
  orders: [],
})

const cartReducer = (state = getInitialCart(), action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { orderID, details: orderToCart } = action.payload

      const cartItemExist = state.orders.find(
        order =>
          order.product === orderToCart.product &&
          order.option === orderToCart.option
      )

      return {
        ...state,
        orderID,
        totalPrice: state.totalPrice + orderToCart.price * orderToCart.quantity,
        totalQuantity: state.totalQuantity + orderToCart.quantity,
        orders: cartItemExist
          ? state.orders.map(order =>
              order.product === orderToCart.product &&
              order.option === orderToCart.option
                ? {
                    ...order,
                    totalPrice:
                      order.totalPrice +
                      orderToCart.price * orderToCart.quantity,
                    quantity: order.quantity + orderToCart.quantity,
                    engraveDetails: [
                      ...order.engraveDetails,
                      ...orderToCart.engraveDetails,
                    ],
                  }
                : order
            )
          : [...state.orders, orderToCart],
      }
    }
    case REMOVE_ITEM: {
      const { id, product, price, option } = action.payload

      const lastItem = state.orders.find(
        order =>
          order.product === product &&
          order.option === option &&
          order.quantity === 1
      )

      return {
        ...state,
        totalPrice: state.totalPrice - price,
        totalQuantity: state.totalQuantity - 1,
        orders: lastItem
          ? state.orders.filter(order => order.option !== lastItem.option)
          : state.orders.map(order =>
              order.product === product && order.option === option
                ? {
                    ...order,
                    totalPrice: order.totalPrice - price,
                    quantity: order.quantity - 1,
                    engraveDetails: order.engraveDetails.filter(
                      detail => detail.engraveID !== id
                    ),
                  }
                : order
            ),
      }
    }
    case CLEAR_CART:
      return getInitialCart()
    default:
      return state
  }
}

export default cartReducer
