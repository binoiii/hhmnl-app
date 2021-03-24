import reduxWrapper from "./src/redux/reduxWrapper"

const React = require("react")
const FBMessenger = require("./src/components/fbMessenger").default

export const wrapRootElement = reduxWrapper

exports.wrapPageElement = ({ element }) => (
  <React.Fragment>
    {element}
    <FBMessenger />
  </React.Fragment>
)
