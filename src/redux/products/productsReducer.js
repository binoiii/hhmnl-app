import { DECREMENT_QUANTITY } from "./productsTypes"
import { products } from "../../data/data"

const productsReducer = (state = products, action) => {
  switch (action.type) {
    case DECREMENT_QUANTITY: {
      break
    }
    default: {
      return state
    }
  }
}

export default productsReducer
