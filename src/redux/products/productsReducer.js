import { DECREMENT_QUANTITY } from "./productsTypes"

const intitialState = {
  products: [
    {
      productID: 1,
      productName: "Bamboo Tumbler",
      price: 499,
      quantity: 100,
      descriptions: ["10-12 Hours for Hot or Cold", "450ml"],
    },
    {
      productID: 2,
      productName: "Bamboo Mug",
      price: 469,
      quantity: 100,
      descriptions: ["Stainless Steel Interior", "400ml"],
    },
  ],
}

const productsReducer = (state = intitialState, action) => {
  switch (action.type) {
    case DECREMENT_QUANTITY: {
      console.log("DECREMENT_QUANTITY")
      break
    }
    default: {
      return state
    }
  }
}

export default productsReducer
