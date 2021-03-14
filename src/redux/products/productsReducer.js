import { DECREMENT_QUANTITY } from "./productsTypes"

const intitialState = {
  products: [
    {
      productID: 1,
      productName: "Bamboo Tumbler",
      thumbImage: {
        alt: "Bamboo Tumbler",
        image:
          "https://hhmnl.netlify.app/images/products/bamboo-tumbler/bamboo-tumbler-thumb.jpg",
      },

      images: [
        {
          alt: "Bamboo Tumbler1",
          image:
            "https://hhmnl.netlify.app/images/products/bamboo-tumbler/bamboo-tumbler1.jpg",
        },
        {
          alt: "Bamboo Tumbler2",
          image:
            "https://hhmnl.netlify.app/images/products/bamboo-tumbler/bamboo-tumbler2.jpg",
        },
        {
          alt: "Bamboo Tumbler3",
          image:
            "https://hhmnl.netlify.app/images/products/bamboo-tumbler/bamboo-tumbler3.jpg",
        },
      ],
      price: 499,
      quantity: 100,
      descriptions: ["10-12 Hours for Hot or Cold", "450ml"],
    },
    {
      productID: 2,
      productName: "Bamboo Mug",
      thumbImage: {
        alt: "Bamboo Mug",
        image:
          "https://hhmnl.netlify.app/images/products/bamboo-tumbler/bamboo-tumbler-thumb.jpg",
      },
      images: [
        {
          alt: "Bamboo Mug1",
          image:
            "https://hhmnl.netlify.app/images/products/bamboo-tumbler/bamboo-tumbler1.jpg",
        },
        {
          alt: "Bamboo Mug2",
          image:
            "https://hhmnl.netlify.app/images/products/bamboo-tumbler/bamboo-tumbler1.jpg",
        },
      ],
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
