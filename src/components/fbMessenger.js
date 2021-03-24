import React, { useEffect } from "react"

const FBMessenger = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v9.0",
      })
    }
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
      fjs.parentNode.insertBefore(js, fjs)
    })(document, "script", "facebook-jssdk")
  })
  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        attribution="install_email"
        page_id="2469960713229077"
        logged_in_greeting="Happy day to you! Drop your questions and we will get back to you the soonest."
        logged_out_greeting="Thank you for visiting HappyHandsMnl!"
        theme_color="#ca7919"
      />
    </>
  )
}

export default FBMessenger
