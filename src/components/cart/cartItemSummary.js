import React from "react"
import PropTypes from "prop-types"

import CartEngraveDetails from "./cartEngraveDetails"

const CartItemSummary = ({ orders }) => {
  return (
    <div className="w-full">
      <h2 className="mb-4 font-secondary text-orange-450 text-3xl italic text-center tracking-wide">
        Items Summary
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="font-primary text-sm text-orange-450 font-normal text-left">
              Product Name
            </th>
            <th className="font-primary text-sm text-orange-450 font-normal">
              Quantity
            </th>
            <th className="font-primary text-sm text-orange-450 font-normal text-right">
              Price
            </th>
          </tr>
        </thead>
        {orders &&
          orders.map((order, index) => (
            <tbody key={order.product}>
              <tr>
                <td className="font-primary text-sm">{order.product}</td>
                <td className="font-primary text-sm text-center">
                  {order.quantity}
                </td>
                <td className="font-primary text-sm text-center text-right">{`₱${order.totalPrice}`}</td>
              </tr>
              <tr>
                <td>
                  <table className="mb-4 w-full">
                    <thead>
                      <tr>
                        <th className="font-primary text-sm text-orange-450 font-normal text-left">
                          Name
                        </th>
                        <th className="font-primary text-sm text-orange-450 font-normal">
                          Result
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {order &&
                        order.engraveDetails &&
                        order.engraveDetails.map((details, i) => (
                          <CartEngraveDetails key={i} details={details} />
                        ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  )
}

CartItemSummary.propTypes = {
  orders: PropTypes.array.isRequired,
}

export default CartItemSummary
