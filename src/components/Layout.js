import React, { useState } from "react"
import { GlobalStyle } from "../globalStyles"
import Navbar from "./Navbar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Navbar toggleModal={toggleModal} showModal={showModal} />
      <GlobalStyle />
      {children}
      <Footer />
    </>
  )
}

export default Layout
