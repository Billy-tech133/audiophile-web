import React from "react"
import styled from "styled-components"
import data from "../constants/links"
import { Link } from "gatsby"
import { FiShoppingCart, FiAlignJustify } from "react-icons/fi"
import { StaticImage } from "gatsby-plugin-image"
const Navbar = () => {
  return (
    <NavBar>
      <InnerNav>
        <Hamburg />
        <Logo className="link" to="/">
          <StaticImage
            src="../assets/shared/desktop/logo.svg"
            placeholder="blurred"
            layout="fixed"
          />
        </Logo>
        <LinkWrap>
          {data.map(link => {
            const { id, url, text } = link
            return (
              <NavLink className="link" to={url} key={id}>
                {text}
              </NavLink>
            )
          })}
        </LinkWrap>

        <Cart />
      </InnerNav>
    </NavBar>
  )
}
const NavBar = styled.section`
  height: var(--height);
  width: 100vw;
  background-color: var(--black-two);
  padding: 20px 0;
`
const InnerNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white-one);
  width: 90%;
  margin: auto;
  @media screen and (min-width: 785px) {
    justify-content: space-between;
    max-width: 80vw;
  }
`
const NavLink = styled(Link)`
  font-size: 18px;
  line-height: 25px;
  margin-left: 15px;
  font-weight: bold;
  color: var(--white-text);
  :hover {
    color: var(--orange-one);
  }
`

const LinkWrap = styled.ul`
  display: none;
  list-style: none;
  width: 100%;
  @media screen and (min-width: 1440px) {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Logo = styled(Link)`
  text-transform: lowercase;
`

const Cart = styled(FiShoppingCart)`
  font-size: 28px;
  @media screen and (min-width: 785px) {
    display: flex;
    justify-content: flex-end;
  }
`

const Hamburg = styled(FiAlignJustify)`
  font-size: 28px;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`

export default Navbar
