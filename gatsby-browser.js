import React from "react"
import reduxWrapper from "./src/redux/reduxWrapper"
import FBMessenger from "./src/components/fbMessenger"

export const wrapRootElement = reduxWrapper

exports.wrapPageElement = ({ element }) => (
  <React.Fragment>
    {element}
    <FBMessenger />
  </React.Fragment>
)
