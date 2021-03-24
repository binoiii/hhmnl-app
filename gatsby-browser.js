// import reduxWrapper from "./src/redux/reduxWrapper"
const React = require("react")
export const wrapRootElement = reduxWrapper

// const FBMessenger = require("./src/components/fbmessenger").default

exports.wrapPageElement = ({ element }) => (
  <React.Fragment>
    {element}
    {/* <FBMessenger /> */}
  </React.Fragment>
)
