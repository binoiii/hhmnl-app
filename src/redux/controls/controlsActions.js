import { OPEN_CART, HIDE_CART } from "./controlsTypes"

export const openCart = control => ({
  type: OPEN_CART,
})

export const hideCart = control => ({
  type: HIDE_CART,
})
