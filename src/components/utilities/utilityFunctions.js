import { useEffect } from "react"
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"

//Universal Event Listener
export const useWindowEvent = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

//Lock Scroll on Modal
export const useLockScroll = component => {
  useEffect(() => {
    component && disableBodyScroll(component)
    return () => clearAllBodyScrollLocks(component)
  }, [component])
}

//Current Year
const currentDate = new Date()
const getCurrentYear = () => currentDate.getFullYear()
export const currentYear = getCurrentYear()
