import {
  CREATE_ORDER,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  ADD_ENGRAVE_DETAILS,
  REMOVE_ENGRAVE_DETAILS,
  UPDATE_DETAILS,
  SUBMIT_ORDER,
  UNSUBMIT_ORDER,
  CLEAR_ORDER,
} from "./orderTypes"

export const createOrder = orderDetails => ({
  type: CREATE_ORDER,
  payload: orderDetails,
})

export const addQuantity = quantity => ({
  type: ADD_QUANTITY,
  payload: quantity,
})
export const subtractQuantity = quantity => ({
  type: SUBTRACT_QUANTITY,
  payload: quantity,
})

export const addEngraveDetails = engraveDetail => ({
  type: ADD_ENGRAVE_DETAILS,
  payload: engraveDetail,
})

export const removeEngraveDetails = engraveDetails => ({
  type: REMOVE_ENGRAVE_DETAILS,
  payload: engraveDetails,
})

export const updateDetails = updateDetails => ({
  type: UPDATE_DETAILS,
  payload: updateDetails,
})

export const submitOrder = submitStatus => ({
  type: SUBMIT_ORDER,
  payload: submitStatus,
})

export const unsubmitOrder = submitStatus => ({
  type: UNSUBMIT_ORDER,
  payload: submitStatus,
})

export const clearOrder = clearDetails => ({
  type: CLEAR_ORDER,
  payload: clearDetails,
})
