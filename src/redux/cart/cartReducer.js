import { ADD_TO_CART, REMOVE_ITEM } from "./cartTypes"

const cart = {
  orderID: "",
  totalQuantity: 0,
  totalPrice: 0,
  orders: [],
}

const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { orderID, details: orderToCart } = action.payload

      const cartItemExist = state.orders.find(
        order => order.product === orderToCart.product
      )

      return {
        ...state,
        orderID,
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
    case REMOVE_ITEM: {
      const { id, product, price } = action.payload

      return {
        ...state,
        totalPrice: state.totalPrice - price,
        totalQuantity: state.totalQuantity - 1,
        orders: state.orders.map(order =>
          order.product === product
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
    default:
      return state
  }
}

export default cartReducer
