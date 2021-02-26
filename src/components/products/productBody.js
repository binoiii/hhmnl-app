import React, { useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import Modal from "../modal"
import OrderModal from "../order/orderModal"

import { createOrder } from "../../redux/order/orderActions"

const ProductBody = ({ productName, price, descriptions, createOrder }) => {
  const [show, setShow] = useState(false)

  const productDetails = {
    isSubmitted: false,
    productName,
    quantity: 1,
    engraveDetails: [
      {
        engraveID: 1,
        name: "",
        font: "",
      },
    ],
  }

  const handleHide = () => setShow(false)
  const handleShow = () => {
    createOrder(productDetails)
    setShow(true)
  }

  return (
    <>
      <div className="border-r border-l">
        <h5 className="py-4 font-primary text-sm font-medium uppercase text-shadow-xs text-center tracking-wider">
          {productName}
        </h5>
        <ul className="font-primary text-xs text-center">
          {descriptions &&
            descriptions.map(description => (
              <li key={description}>{description}</li>
            ))}
        </ul>
        <p className="my-4 font-primary text-orange-450 font-medium text-center">
          {`₱${price}`}
        </p>
        <div
          className="py-4 w-full bg-orange-450 font-primary text-xs text-white uppercase text-center tracking-wider cursor-pointer"
          onClick={handleShow}
          onKeyDown={handleShow}
          role="button"
        >
          grab now
        </div>
      </div>
      <Modal show={show} onHide={handleHide}>
        <OrderModal productName={productName} price={price} />
      </Modal>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  createOrder: orderDetails => dispatch(createOrder(orderDetails)),
})

ProductBody.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  descriptions: PropTypes.array.isRequired,
  createOrder: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(ProductBody)
