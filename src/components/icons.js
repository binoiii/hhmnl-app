import React from "react"
import PropTypes from "prop-types"
import { IconContext } from "react-icons"

import { RiHomeSmileLine } from "react-icons/ri"
import { HiOutlineShoppingCart } from "react-icons/hi"

import {
  // AiOutlineUser,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai"
import { BiArrowBack, BiShoppingBag } from "react-icons/bi"
import { FiMail, FiMinusSquare } from "react-icons/fi"
import {
  IoIosArrowBack,
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io"
import { BsPlusSquare } from "react-icons/bs"

export const Home = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <RiHomeSmileLine />
  </IconContext.Provider>
)

Home.defaultProps = {
  className: "text-base text-black",
}

Home.propTypes = {
  className: PropTypes.string,
}

export const ShoppingCart = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <HiOutlineShoppingCart />
  </IconContext.Provider>
)

ShoppingCart.defaultProps = {
  className: "text-base text-black",
}

ShoppingCart.propTypes = {
  className: PropTypes.string,
}

// export const UserIcon = ({ className, size }) => (
//   <IconContext.Provider value={{ className, size }}>
//     <AiOutlineUser />
//   </IconContext.Provider>
// )

// UserIcon.defaultProps = {
//   className: "text-base text-black",
// }

// UserIcon.propTypes = {
//   className: PropTypes.string,
//   size: PropTypes.string,
// }

export const Email = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <FiMail />
  </IconContext.Provider>
)

Email.defaultProps = {
  className: "text-base text-black",
}

Email.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Fb = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <AiOutlineFacebook />
  </IconContext.Provider>
)
Fb.defaultProps = {
  className: "text-base text-black",
}

Fb.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Ig = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <AiOutlineInstagram />
  </IconContext.Provider>
)

Ig.defaultProps = {
  className: "text-base text-black",
}

Ig.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const BackIcon = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <BiArrowBack />
  </IconContext.Provider>
)

BackIcon.defaultProps = {
  className: "text-base text-black",
}

BackIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const BackToTop = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <IoIosArrowUp />
  </IconContext.Provider>
)

BackToTop.defaultProps = {
  className: "text-base text-black",
}

BackToTop.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Bag = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <BiShoppingBag />
  </IconContext.Provider>
)

Bag.defaultProps = {
  className: "text-base text-black",
}

Bag.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Add = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <BsPlusSquare />
  </IconContext.Provider>
)

Add.defaultProps = {
  className: "text-base text-black",
}

Add.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const DropDown = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <IoIosArrowDown />
  </IconContext.Provider>
)

DropDown.defaultProps = {
  className: "text-base text-black",
}

DropDown.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Hidden = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <IoIosArrowForward />
  </IconContext.Provider>
)

Hidden.defaultProps = {
  className: "text-base text-black",
}

Hidden.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Minus = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <FiMinusSquare />
  </IconContext.Provider>
)

Minus.defaultProps = {
  className: "text-base text-black",
}

Minus.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Next = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <IoIosArrowForward />
  </IconContext.Provider>
)

Next.defaultProps = {
  className: "text-base text-white",
}

Next.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Prev = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <IoIosArrowBack />
  </IconContext.Provider>
)

Next.defaultProps = {
  className: "text-base text-white",
}

Next.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}
