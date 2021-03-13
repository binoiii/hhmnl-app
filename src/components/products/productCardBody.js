import React, { useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { v4 as uuidv4 } from "uuid"

import Modal from "../modal"
import OrderModalContainer from "../order/orderModalContainer"

import { createOrder } from "../../redux/order/orderActions"

const ProductCardBody = ({
  productName,
  price,
  descriptions,
  createOrder,
  orders,
  thumbImage,
}) => {
  const [show, setShow] = useState(false)

  const order = orders.orders.find(order => order.productName === productName)

  const isOrdered = typeof order !== "undefined" ? order.isOrdered : false

  const productDetails = {
    isSubmitted: false,
    isOrdered: true,
    productName,
    quantity: 1,
    engraveDetails: [
      {
        engraveID: uuidv4(),
        name: "",
        font: "",
      },
    ],
  }

  const handleHide = () => setShow(false)
  const handleShow = () => {
    !isOrdered && createOrder(productDetails)
    setShow(true)
  }

  return (
    <div className="flex-1">
      <div className="h-full flex flex-col border-r border-l">
        <h5 className="mx-2 py-4 font-primary font-medium uppercase text-shadow-xs text-center tracking-wider">
          {productName}
        </h5>
        <ul className="flex flex-1 flex-col justify-center mx-2 font-primary text-xs text-center ">
          {descriptions &&
            descriptions.map(description => (
              <li key={description}>{description}</li>
            ))}
        </ul>
        <p className="my-4 font-primary text-orange-450 font-medium text-center">
          {`₱${price}`}
        </p>
        <button
          className="py-4 w-full bg-orange-450 font-primary text-xs text-white uppercase text-center tracking-wider outline-none focus:outline-none cursor-pointer"
          onClick={handleShow}
        >
          grab now
        </button>
      </div>
      {show && (
        <Modal onHide={handleHide}>
          <OrderModalContainer
            productName={productName}
            handleHide={handleHide}
            price={price}
            thumbImage={thumbImage}
          />
        </Modal>
      )}
    </div>
  )
}

const mapStateToProps = ({ orders }) => ({
  orders,
})

const mapDispatchToProps = dispatch => ({
  createOrder: orderDetails => dispatch(createOrder(orderDetails)),
})

ProductCardBody.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  descriptions: PropTypes.array.isRequired,
  createOrder: PropTypes.func.isRequired,
  orders: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardBody)
