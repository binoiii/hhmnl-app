import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import OrderModifyButton from "./orderModifyButton"

const OrderSummary = ({ productName, price, orders }) => {
  const { productName: product, quantity, engraveDetails } = orders.orders.find(
    order => order.productName === productName
  )

  return (
    <div className="p-6 w-lg h-96 flex flex-col items-center">
      <h3 className="mb-4 font-secondary text-3xl text-orange-450 italic">
        Order Summary
      </h3>
      <div className="w-80 mb-4 px-2 py-4 flex flex-col justify-center border-b border-t border-orange-450">
        <div className="flex justify-between">
          <h4 className="font-primary font-medium uppercase">subtotal</h4>
          <p className="font-primary text-orange-450">{`₱${
            quantity * price
          }`}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-primary font-medium uppercase">product</h4>
          <p className="font-primary text-orange-450">{`${product}`}</p>
        </div>
      </div>
      <div className="mb-8 h-72 overflow-y-auto">
        <table className="mb-8 table-auto w-80 overflow-y-auto">
          <thead>
            <tr>
              <th className="font-primary text-sm text-orange-450 font-medium">
                Name
              </th>
              <th className="font-primary text-sm text-orange-450 font-medium">
                Font
              </th>
              <th className="font-primary text-sm text-orange-450 font-medium">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {engraveDetails &&
              engraveDetails.map(({ engraveID, name: engraveName, font }) => {
                const modifiedFont = font.replace("font-", "")

                return (
                  <tr key={engraveID}>
                    <td className="font-primary text-sm text-center">
                      {engraveName}
                    </td>
                    <td className={`${font} text-sm text-center`}>
                      {modifiedFont}
                    </td>
                    <td className={`${font} text-sm text-center`}>
                      {engraveName}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <div>
        <button className="w-20 bg-white-450 font-primary text-xs text-orange-450 uppercase text-center tracking-wider outline-none focus:outline-none cursor-pointer">
          checkout
        </button>
        <span className="mx-2 font-primary text-xs">or</span>
        <OrderModifyButton productName={productName} />
        <button className="ml-2 py-2 w-36 bg-white-450 border border-orange-450 font-primary text-xs text-orange-450 uppercase text-center tracking-wider outline-none focus:outline-none cursor-pointer">
          add to cart
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ orders }) => ({ orders })

OrderSummary.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(OrderSummary)
