import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiHero {
        nodes {
          id
          title
          product
          description
          bgImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <HeroWrapper>
      {data.allStrapiHero.nodes.map(item => {
        const {
          bgImage: { localFile },
          id,
          title,
          product,
          description,
        } = item
        const Image = getImage(localFile)
        return (
          <HeroWrap>
            <InnerHero>
              <h6>{title}</h6>
              <h1>{product}</h1>
              <HeroDesc className=".sub-title">{description}</HeroDesc>
              <Button to="/" className="orange-btn link">
                see product
              </Button>
            </InnerHero>
            <InnerWrapper
              image={Image}
              layout="constrained"
              placeholder="blurred"
              alt={title}
              width="400"
              height="100"
            />
          </HeroWrap>
        )
      })}
    </HeroWrapper>
  )
}
const HeroWrapper = styled.main`
  width: 100vw;
  background-color: var(--black-two);
  /* overflow: overlay; */
`
const HeroWrap = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100%;
  background-color: var(--black-two);
  padding: 30px 15px;
  margin: auto;
  @media screen and (min-width: 1440px) {
    width: 83vw;
    flex-direction: row;
    justify-content: space-between;
  }
`

const InnerWrapper = styled(GatsbyImage)`
  margin: auto;
  z-index: 2;
  @media screen and (min-width: 1440px) {
    margin-top: -60px;
  }
`

const InnerHero = styled.div`
  text-align: center;
  color: var(--white-one);
  height: 100%;
  padding: 40px 20px;
  @media screen and (min-width: 785px) {
    width: 600px;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
    margin-top: 30px;
  }
`

const Button = styled(Link)``

const HeroDesc = styled.p`
  max-width: 500px;
  margin-bottom: 50px;
`
export default Hero
