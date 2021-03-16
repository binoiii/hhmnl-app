import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import OrderTotal from "./orderTotal"
import OrderCounter from "./orderCounter"
import OrderOptions from "./orderOptions"
import { updateSelected } from "../../redux/order/orderActions"

const OrderItem = ({
  orders,
  updateSelected,
  productName,
  options,
  quantity,
  thumbImage: { alt, image },
}) => {
  const { selected: defaultSelected } = orders.orders.find(
    order => order.productName === productName
  )

  const { productOptions } = options
  const [selected, setSelected] = useState(defaultSelected)
  const handleSelected = option => setSelected(option)

  useEffect(() => {
    updateSelected({ productName, selected })
    return () => updateSelected({ productName, selected })
  }, [productName, selected, updateSelected])

  return (
    <div className="h-36 md:h-full flex md:flex-col bg-white md:border-r">
      <img alt={alt} src={image} loading="lazy" className="md:w-full" />
      <div className="flex-1">
        <div className="px-4 md:px-10 py-4 h-full flex flex-col">
          <h5 className="mb-2 md:mb-0 md:mt-4 font-primary text-sm md:text-base text-orange-450 font-medium uppercase text-shadow-xs text-center tracking-wider">
            {productName}
          </h5>
          <div className="flex justify-center">
            {productOptions &&
              productOptions.map((option, ind) => {
                const isActive = selected.option === option.option
                return (
                  <OrderOptions
                    isActive={isActive}
                    key={ind}
                    option={option}
                    handleSelected={handleSelected}
                  />
                )
              })}
          </div>
          <OrderTotal price={selected.price} quantity={quantity} />
          <OrderCounter productName={productName} quantity={quantity} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ orders }) => ({ orders })
const mapDispatchToProps = dispatch => ({
  updateSelected: details => dispatch(updateSelected(details)),
})

OrderItem.propTypes = {
  orders: PropTypes.object.isRequired,
  productName: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,

  quantity: PropTypes.number.isRequired,
  engraveDetails: PropTypes.array.isRequired,
  thumbImage: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem)
