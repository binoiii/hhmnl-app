import { DECREMENT_QUANTITY } from "./productsTypes"

const decrementQuantity = quantity => ({
  action: DECREMENT_QUANTITY,
  payload: quantity,
})
