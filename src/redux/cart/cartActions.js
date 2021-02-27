import { ADD_TO_CART } from "./cartTypes"

export const addToCart = order => ({
  type: ADD_TO_CART,
  payload: order,
})
