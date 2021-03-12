import { useEffect } from "react"
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"

export const useWindowEvent = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

export const useLockScroll = component => {
  useEffect(() => {
    disableBodyScroll(component)
    return () => clearAllBodyScrollLocks(component)
  }, [component])
}

export const useConditionalLockScroll = (component, isLocked) =>
  isLocked ? disableBodyScroll(component) : clearAllBodyScrollLocks(component)
