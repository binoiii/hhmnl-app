import { OPEN_CART, HIDE_CART } from "./controlsTypes"

const controls = {
  isCartOpen: false,
}

const controlsReducer = (state = controls, action) => {
  switch (action.type) {
    case OPEN_CART: {
      return {
        ...state,
        isCartOpen: true,
      }
    }
    case HIDE_CART: {
      return {
        ...state,
        isCartOpen: false,
      }
    }
    default:
      return state
  }
}

export default controlsReducer
