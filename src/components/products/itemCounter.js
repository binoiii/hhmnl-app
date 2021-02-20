import React from "react"
import {
  addItem,
  subtractItem,
} from "../../redux/itemCounter/itemCounterActions"
import { connect } from "react-redux"

const ItemCounter = props => {
  const { addItem, subtractItem, quantity } = props
  return (
    <div>
      <button onClick={() => subtractItem(1)}>-</button>
      <input type="number" disabled value={quantity} className="text-center" />
      <button onClick={() => addItem(1)}>+</button>
    </div>
  )
}

const mapStateToProps = state => ({
  quantity: state.quantity,
})
const mapDispatchToProps = dispatch => ({
  addItem: quantity => dispatch(addItem(quantity)),
  subtractItem: quantity => dispatch(subtractItem(quantity)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemCounter)
