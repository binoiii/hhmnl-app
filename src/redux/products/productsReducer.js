import { FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS } from "./productsTypes"

const intialState = {
  loading: false,
  error: false,
  products: [],
}

const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default productsReducer
