import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import data from "../constants/links"
import social from "../constants/socialLinks"
import styled from "styled-components"
const Footer = () => {
  return (
    <FooterWrap>
      <InnerWrap>
        <NavWrap>
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
        </NavWrap>
        <FooterText>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </FooterText>
        <TextWrap>
          <Copyright>Copyright 2021. All Rights Reserved</Copyright>
          <SocialWrap>
            {social.map(link => {
              const { id, Icon, url } = link
              return (
                <SocialLink key={id} to={url}>
                  {Icon}
                </SocialLink>
              )
            })}
          </SocialWrap>
        </TextWrap>
      </InnerWrap>
    </FooterWrap>
  )
}
const FooterWrap = styled.section`
  height: 100%;
  width: 100vw;
  background-color: var(--black-two);
  padding: 30px 15px;
`
const Logo = styled(Link)``

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 785px) {
    align-items: flex-start;
    width: 80vw;
  }
  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    margin: 50px 0;
    flex-direction: row;
  }
`
const LinkWrap = styled.ul`
  margin: 50px auto 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 785px) {
    flex-direction: row;
    margin: 50px 0;
  }
  @media screen and (min-width: 1440px) {
  }
`
const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: auto;
  @media screen and (min-width: 785px) {
    align-items: flex-start;
    width: 80vw;
  }
`
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: var(--white-three);
  justify-content: space-between;
  margin: 50px auto 50px;
  @media screen and (min-width: 785px) {
    flex-direction: row;
    margin: 50px 0;
  }
`
const SocialWrap = styled.div`
  color: var(--white-one);
`

const FooterText = styled.p`
  color: var(--white-three);
  text-align: center;
  max-width: 600px;
  @media screen and (min-width: 785px) {
    text-align: left;
  }
`

const Copyright = styled.p``

const SocialLink = styled(Link)`
  color: var(--white-one);
  font-size: 30px;
  margin-left: 15px;
  :hover {
    color: var(--orange-one);
  }
`

const NavLink = styled(Link)`
  font-size: 18px;
  line-height: 25px;
  font-weight: bold;
  margin-top: 15px;
  color: var(--white-one);
  @media screen and (min-width: 785px) {
    :not(:first-child) {
      margin-left: 30px;
    }
  }
  :hover {
    color: var(--orange-one);
  }
`
export default Footer
