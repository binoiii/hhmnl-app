import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../redux/cart/cartActions"

const ThankyouOrder = () => {
  const { orderID } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const idArray = orderID.split("-")
  const orderRef = `${idArray[0]}-${idArray[1]}`

  const [orderReference] = useState(orderRef)

  console.log(orderID)

  useEffect(() => {
    dispatch(clearCart())
  }, [dispatch])

  return (
    <div className="mt-16 md:mt-0 flex flex-col items-center p-16 sm:p-20 md:p-32">
      <h1 className="text-center font-secondary text-5xl text-orange-450 tracking-wide">
        Thank you for your purchase !
      </h1>
      <p className="my-8 text-center font-primary">
        Your order reference is: {orderReference}
      </p>
      <Link to="/">
        <button className="py-4 w-48 bg-orange-450 font-primary text-xs text-white uppercase text-center tracking-wider outline-none focus:outline-none cursor-pointer">
          Back to home
        </button>
      </Link>
    </div>
  )
}

export default ThankyouOrder
