import { ADD_TO_CART, REMOVE_ITEM } from "./cartTypes"

export const addToCart = order => ({
  type: ADD_TO_CART,
  payload: order,
})

export const removeItem = details => ({
  type: REMOVE_ITEM,
  payload: details,
})
