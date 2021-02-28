import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const Cart = ({ cart }) => {
  const { totalQuantity, totalPrice, orders } = cart

  return (
    <div>
      <h2 className="mt-16 mb-6 font-secondary text-orange-450 text-4xl italic text-center">
        Cart Summary
      </h2>
      {orders.length > 0 ? (
        <div className="flex flex-col items-center">
          <div className="flex">
            <h3 className="mx-8 font-primary font-medium uppercase">
              subtotal
            </h3>
            <p className="mx-8 font-primary text-orange-450">{`₱${totalPrice}`}</p>
          </div>
          <div className="mb-16 flex">
            <h3 className="mx-8 font-primary font-medium uppercase">
              total quantity
            </h3>
            <p className="mx-8 font-primary text-orange-450">{totalQuantity}</p>
          </div>
          <div>
            <h2 className="mb-4 font-secondary text-orange-450 text-3xl italic text-center">
              Items Summary
            </h2>
            <div>
              <table className="mb-8 table-auto w-80">
                <tr>
                  <th className="font-primary text-sm text-orange-450 font-medium">
                    Product Name
                  </th>
                  <th className="font-primary text-sm text-orange-450 font-medium">
                    Quantity
                  </th>
                </tr>

                <tbody>
                  {orders &&
                    orders.map(order => (
                      <tr key={order.product}>
                        <td className="font-primary text-sm text-center">
                          {order.product}
                        </td>
                        <td className="font-primary text-sm text-center">
                          {order.quantity}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Add items to your cart. Happy Shopping</p>
          <Link to="/">Go back to products</Link>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = ({ cart }) => ({ cart })

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(Cart)
