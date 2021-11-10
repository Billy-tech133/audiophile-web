import React from "react"
import { GlobalStyle } from "../globalStyles"
import Navbar from "./Navbar"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
