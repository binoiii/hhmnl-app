import React from "react"
import FBMessenger from "./src/components/fbMessenger"
import reduxWrapper from "./src/redux/reduxWrapper"
export const wrapRootElement = reduxWrapper

export const wrapPageElement = ({ element }) => (
  <React.Fragment>
    {element}
    <FBMessenger />
  </React.Fragment>
)
