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

export const createOrder = details => ({
  type: CREATE_ORDER,
  payload: details,
})

export const addQuantity = quantity => ({
  type: ADD_QUANTITY,
  payload: quantity,
})
export const subtractQuantity = quantity => ({
  type: SUBTRACT_QUANTITY,
  payload: quantity,
})

export const addEngraveDetails = details => ({
  type: ADD_ENGRAVE_DETAILS,
  payload: details,
})

export const removeEngraveDetails = details => ({
  type: REMOVE_ENGRAVE_DETAILS,
  payload: details,
})

export const updateDetails = details => ({
  type: UPDATE_DETAILS,
  payload: details,
})

export const submitOrder = submitStatus => ({
  type: SUBMIT_ORDER,
  payload: submitStatus,
})

export const unsubmitOrder = status => ({
  type: UNSUBMIT_ORDER,
  payload: status,
})

export const clearOrder = details => ({
  type: CLEAR_ORDER,
  payload: details,
})
