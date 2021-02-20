import { ADD_ITEM, SUBTRACT_ITEM } from "./itemCounterTypes"

export const addItem = quantity => ({
  type: ADD_ITEM,
  payload: quantity,
})
export const subtractItem = quantity => ({
  type: SUBTRACT_ITEM,
  payload: quantity,
})
