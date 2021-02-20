import React from "react"
import { connect } from "react-redux"

const TotalCounter = ({ quantity }) => {
  return (
    <div>
      <h5>Total Items:{quantity}</h5>
    </div>
  )
}

const mapStateToProps = state => ({
  quantity: state.quantity,
})

export default connect(mapStateToProps)(TotalCounter)
