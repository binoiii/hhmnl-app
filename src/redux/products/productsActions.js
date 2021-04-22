import { FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS } from "./productsTypes"

export const featchProductsRequest = () => ({
  type: FETCH_PRODUCTS_LOADING,
})

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
})

export const fetchProducts = () => {
  return dispatch => {
    dispatch(featchProductsRequest())
    fetch("./data/products.json")
      .then(res => res.json())
      .then(res => dispatch(fetchProductsSuccess(res)))
      .catch(err => {
        console.log(err.message)
      })
  }
}
