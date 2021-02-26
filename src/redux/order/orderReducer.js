import {
  CREATE_ORDER,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  ADD_ENGRAVE_DETAILS,
  REMOVE_ENGRAVE_DETAILS,
  UPDATE_DETAILS,
  SUBMIT_ORDER,
  UNSUBMIT_ORDER,
} from "./orderTypes"

const initialState = {
  orders: [],
}
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER: {
      const orderDetails = action.payload

      const productExist = state.orders.find(
        product => product.productName === action.payload.productName
      )

      if (productExist)
        return {
          ...state,
        }
      return {
        ...state,
        orders: [...state.orders, orderDetails],
      }
    }
    case ADD_QUANTITY: {
      const { quantity, productName } = action.payload

      return {
        ...state,
        orders: state.orders.map(order =>
          order.productName === productName
            ? { ...order, quantity: order.quantity + quantity }
            : order
        ),
      }
      //
    }
    case SUBTRACT_QUANTITY: {
      const { productName, quantity } = action.payload
      return {
        ...state,
        orders: state.orders.map(order =>
          order.productName === productName
            ? { ...order, quantity: order.quantity - quantity }
            : order
        ),
      }
    }
    case ADD_ENGRAVE_DETAILS: {
      const { productName, engraveDetail } = action.payload
      return {
        ...state,
        orders: state.orders.map(order =>
          order.productName === productName
            ? {
                ...order,
                engraveDetails: [...order.engraveDetails, engraveDetail],
              }
            : order
        ),
      }
    }
    case REMOVE_ENGRAVE_DETAILS: {
      const { productName, id } = action.payload
      return {
        ...state,
        orders: state.orders.map(order =>
          order.productName === productName
            ? {
                ...order,
                engraveDetails: order.engraveDetails.filter(
                  detail => detail.engraveID !== id
                ),
              }
            : order
        ),
      }
    }
    case UPDATE_DETAILS: {
      const { productName, id, font, engraveName } = action.payload
      return {
        ...state,
        orders: state.orders.map(order =>
          order.productName === productName
            ? {
                ...order,
                engraveDetails: order.engraveDetails.map(detail =>
                  detail.engraveID === id
                    ? { ...detail, font, name: engraveName }
                    : detail
                ),
              }
            : order
        ),
      }
    }
    case SUBMIT_ORDER: {
      const { productName, isSubmitted } = action.payload

      return {
        ...state,
        orders: state.orders.map(order =>
          order.productName === productName ? { ...order, isSubmitted } : order
        ),
      }
    }

    case UNSUBMIT_ORDER: {
      const { productName, isSubmitted } = action.payload

      return {
        ...state,
        orders: state.orders.map(order =>
          order.productName === productName ? { ...order, isSubmitted } : order
        ),
      }
    }
    default: {
      return state
    }
  }
}

export default orderReducer
