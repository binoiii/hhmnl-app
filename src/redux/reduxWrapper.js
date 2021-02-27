import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"

import orderReducer from "./order/orderReducer"
import productsReducer from "./products/productsReducer"
import cartReducer from "./cart/cartReducer"

const rootReducer = combineReducers({
  orders: orderReducer,
  products: productsReducer,
  cart: cartReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
)

export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
