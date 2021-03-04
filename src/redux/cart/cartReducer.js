import { ADD_TO_CART } from "./cartTypes"

const cart = {
  totalQuantity: 0,
  totalPrice: 0,
  orders: [],
}

const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const orderToCart = action.payload

      const cartItemExist = state.orders.find(
        order => order.product === orderToCart.product
      )

      return {
        ...state,
        totalPrice: state.totalPrice + orderToCart.totalPrice,
        totalQuantity: state.totalQuantity + orderToCart.quantity,
        orders: cartItemExist
          ? state.orders.map(order =>
              order.product === orderToCart.product
                ? {
                    ...order,
                    totalPrice: order.totalPrice + orderToCart.totalPrice,
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
    default:
      return {
        ...state,
      }
  }
}

export default cartReducer
