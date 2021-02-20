import { ADD_ITEM, SUBTRACT_ITEM } from "./itemCounterTypes"

const initialState = {
  quantity: 2,
}
const itemCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        quantity: state.quantity + action.payload,
      }
    }
    case SUBTRACT_ITEM: {
      return {
        ...state,
        quantity: state.quantity - action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default itemCounterReducer
