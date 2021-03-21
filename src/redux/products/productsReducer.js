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
      options: {
        type: "size",
        productOptions: [
          { option: "350ml", price: 449 },
          { option: "450ml", price: 499 },
        ],
      },

      price: 449,
      quantity: 100,
      descriptions: ["10-12 Hours for Hot or Cold"],
    },
    {
      productID: 2,
      productName: "Metal Tumbler",
      thumbImage: {
        alt: "Metal Tumbler",
        image:
          "https://hhmnl.netlify.app/images/products/metal-tumbler/metal-tumbler-thumb.jpg",
      },
      images: [
        {
          alt: "Metal Tumbler1",
          image:
            "https://hhmnl.netlify.app/images/products/metal-tumbler/metal-tumbler1.jpg",
        },
        {
          alt: "Metal Tumbler2",
          image:
            "https://hhmnl.netlify.app/images/products/metal-tumbler/metal-tumbler2.jpg",
        },
        {
          alt: "Metal Tumbler3",
          image:
            "https://hhmnl.netlify.app/images/products/metal-tumbler/metal-tumbler3.jpg",
        },
      ],
      options: {
        type: "color",
        productOptions: [
          { option: "Yellow", price: 449 },
          { option: "Black", price: 449 },
          { option: "Blue", price: 449 },
          { option: "Red", price: 449 },
        ],
      },
      price: 449,
      quantity: 100,
      descriptions: ["8-10 Hours for Hot / Cold"],
    },
    {
      productID: 3,
      productName: "Chopping Board",
      thumbImage: {
        alt: "Chopping Board",
        image:
          "https://hhmnl.netlify.app/images/products/chopping-board/chopping-board-thumb.jpg",
      },
      images: [
        {
          alt: "Chopping Board1",
          image:
            "https://hhmnl.netlify.app/images/products/chopping-board/chopping-board1.jpg",
        },
        {
          alt: "Chopping Board2",
          image:
            "https://hhmnl.netlify.app/images/products/chopping-board/chopping-board2.jpg",
        },
        {
          alt: "Chopping Board3",
          image:
            "https://hhmnl.netlify.app/images/products/chopping-board/chopping-board3.jpg",
        },
      ],
      options: {
        type: "null",
        productOptions: [{ option: "", price: 269 }],
      },
      price: 269,
      quantity: 100,
      descriptions: [`11" x 7" x 0.5"`],
    },
    {
      productID: 3,
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
            "https://hhmnl.netlify.app/images/products/bamboo-mug/bamboo-mug1.jpg",
        },
        {
          alt: "Bamboo Mug2",
          image:
            "https://hhmnl.netlify.app/images/products/bamboo-mug/bamboo-mug2.jpg",
        },
        {
          alt: "Bamboo Mug2",
          image:
            "https://hhmnl.netlify.app/images/products/bamboo-mug/bamboo-mug3.jpg",
        },
      ],
      options: {
        type: null,
        productOptions: [{ option: null, price: 469 }],
      },
      price: 469,
      quantity: 100,
      descriptions: ["Stainless Steel Interior", "400ml"],
    },
    {
      productID: 3,
      productName: "Glass Cup",
      thumbImage: {
        alt: "Glass Cup",
        image:
          "https://hhmnl.netlify.app/images/products/bamboo-tumbler/glass-cup-thumb.jpg",
      },
      images: [
        {
          alt: "Bamboo Mug1",
          image:
            "https://hhmnl.netlify.app/images/products/glass-cup/bamboo-mug1.jpg",
        },
        {
          alt: "Bamboo Mug2",
          image:
            "https://hhmnl.netlify.app/images/products/glass-cup/bamboo-mug2.jpg",
        },
        {
          alt: "Bamboo Mug2",
          image:
            "https://hhmnl.netlify.app/images/products/glass-cup/bamboo-mug3.jpg",
        },
      ],
      options: {
        type: "size",
        productOptions: [
          { option: "250ml", price: 399 },
          { option: "350ml", price: 429 },
        ],
      },
      price: 469,
      quantity: 100,
      descriptions: ["Insulated Double Layer Wall ", "Handles hot or cold"],
    },
  ],
}

const productsReducer = (state = intitialState, action) => {
  switch (action.type) {
    case DECREMENT_QUANTITY: {
      break
    }
    default: {
      return state
    }
  }
}

export default productsReducer
