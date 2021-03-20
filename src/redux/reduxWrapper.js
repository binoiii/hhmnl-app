import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"
import { throttle } from "lodash"

import orderReducer from "./order/orderReducer"
import productsReducer from "./products/productsReducer"
import cartReducer from "./cart/cartReducer"
import controlsReducer from "./controls/controlsReducer"

import { loadState, saveState } from "../components/utilities/utilityFunctions"

const persistedState = loadState()

const rootReducer = combineReducers({
  orders: orderReducer,
  products: productsReducer,
  cart: cartReducer,
  controls: controlsReducer,
})

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(logger))
)

store.subscribe(
  throttle(() => {
    saveState(store.getState())
  }, 1000)
)

export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
