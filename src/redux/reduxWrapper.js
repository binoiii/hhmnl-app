// import React from "react"
// import { createStore, applyMiddleware } from "redux"
// import { Provider } from "react-redux"
// import { logger } from "redux-logger"

// import itemCounterReducer from "./itemCounter/itemCounterReducer"

// export default ({ children }) => {
//   const store = createStore(itemCounterReducer)
//   return <Provider store={store}>{children}</Provider>
// }

import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./itemCounter/itemCounterReducer"

export default ({ element }) => {
  const store = createStore(rootReducer)

  return <Provider store={store}>{element}</Provider>
}
