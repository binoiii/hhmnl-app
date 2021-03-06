import { useEffect } from "react"

//Universal Event Listener
export const useWindowEvent = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

//Current Year
const currentDate = new Date()
const getCurrentYear = () => currentDate.getFullYear()
export const currentYear = getCurrentYear()

//Load State from Local Storage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state")
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

//Save State to Local Storage
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("state", serializedState)
  } catch (err) {
    console.log(err)
  }
}
