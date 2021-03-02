import React from "react"
import PropTypes from "prop-types"

const CartItemSummary = ({ orders }) => {
  return (
    <div className="w-full">
      <h2 className="mb-4 font-secondary text-orange-450 text-3xl italic text-center tracking-wide">
        Items Summary
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="font-primary text-sm text-orange-450 font-medium text-left">
              Product Name
            </th>
            <th className="font-primary text-sm text-orange-450 font-medium">
              Quantity
            </th>
            <th className="font-primary text-sm text-orange-450 font-medium text-right">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map(order => (
              <tr key={order.product}>
                <td className="font-primary">{order.product}</td>
                <td className="font-primary text-center">{order.quantity}</td>
                <td className="font-primary text-center text-right">{`₱${order.totalPrice}`}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

CartItemSummary.propTypes = {
  orders: PropTypes.array.isRequired,
}

export default CartItemSummary
