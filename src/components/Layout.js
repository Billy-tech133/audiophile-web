import React from "react"
import { GlobalStyle } from "../globalStyles"
import Navbar from "./Navbar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      {children}
      <Footer />
    </>
  )
}

export default Layout
