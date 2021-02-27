import { ADD_TO_CART } from "./cartTypes"

const cart = {
  totalQuantity: 0,
  totalPrice: 0,
  orders: [],
}

const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const order = action.payload

      return {
        ...state,
        totalPrice: state.totalPrice + order.totalPrice,
        totalQuantity: state.totalQuantity + order.quantity,
        orders: [...state.orders, order],
      }
    }
    default:
      return {
        ...state,
      }
  }
}

export default cartReducer
