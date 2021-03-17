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
          alt: "Metal Tumbler1",
          image:
            "https://hhmnl.netlify.app/images/products/metal-tumbler/metal-tumbler1.jpg",
        },
      ],
      options: {
        type: "color",
        productOptions: [
          { option: "bg-yellow-200", price: 449 },
          { option: "bg-black", price: 449 },
          { option: "bg-blue-450", price: 449 },
          { option: "bg-red-500", price: 449 },
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
        alt: "Chopipping Board",
        image:
          "https://hhmnl.netlify.app/images/products/chopping-board/chopping-board-thumb.jpg",
      },
      images: [
        {
          alt: "Metal Tumbler1",
          image:
            "https://hhmnl.netlify.app/images/products/chopping-board/chopping-board1.jpg",
        },
        {
          alt: "Metal Tumbler1",
          image:
            "https://hhmnl.netlify.app/images/products/chopping-board/chopping-board1.jpg",
        },
      ],
      options: {
        type: "null",
        productOptions: [
          { option: "bg-yellow-200", price: 449 },
          { option: "bg-black", price: 449 },
          { option: "bg-blue-450", price: 449 },
          { option: "bg-red-500", price: 449 },
        ],
      },
      price: 269,
      quantity: 100,
      descriptions: [`11" x 7" x 0.5"`],
    },
    // {
    //   productID: 3,
    //   productName: "Bamboo Mug",
    //   thumbImage: {
    //     alt: "Bamboo Mug",
    //     image:
    //       "https://hhmnl.netlify.app/images/products/bamboo-tumbler/bamboo-tumbler-thumb.jpg",
    //   },
    //   images: [
    //     {
    //       alt: "Bamboo Mug1",
    //       image:
    //         "https://hhmnl.netlify.app/images/products/bamboo-tumbler/bamboo-tumbler1.jpg",
    //     },
    //     {
    //       alt: "Bamboo Mug2",
    //       image:
    //         "https://hhmnl.netlify.app/images/products/bamboo-tumbler/bamboo-tumbler1.jpg",
    //     },
    //   ],
    //   options: {
    //     type: null,
    //     productOptions: [{ option: null, price: 449 }],
    //   },
    //   price: 469,
    //   quantity: 100,
    //   descriptions: ["Stainless Steel Interior", "400ml"],
    // },
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
