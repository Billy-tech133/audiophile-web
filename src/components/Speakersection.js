import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import circleBg from "../assets/home/desktop/pattern-circles.svg"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
const Speakersection = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiSpeaker {
        nodes {
          id
          speakerName
          speakerDesc
          speakerImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `)
  const query = data.allStrapiSpeaker.nodes
  return (
    <ProductWrap>
      <InnerWrapper>
        {query
          .filter(item => item.id === "Speaker_1")
          .map(node => {
            const {
              speakerName,
              speakerDesc,
              speakerImage: { localFile },
            } = node
            const Image = getImage(localFile)
            return (
              <FirstItem>
                <FirstImage image={Image} layout="fixed" alt={speakerName} />
                <FirstText>
                  <h3>{speakerName}</h3>
                  <Text>{speakerDesc}</Text>
                  <FirstBtn className="black-btn">see product</FirstBtn>
                </FirstText>
              </FirstItem>
            )
          })}
        {query
          .filter(item => item.id === "Speaker_2")
          .map(node => {
            const {
              speakerName,
              speakerImage: { localFile },
            } = node
            const pathToImage = getImage(localFile)
            const bgImage = convertToBgImage(pathToImage)
            return (
              <SecondItem
                Tag="article"
                layout="constrained"
                {...bgImage}
                preserveStackingContext
              >
                <SecondInner>
                  <SecondText>{speakerName}</SecondText>
                  <FirstBtn className="transparent-btn">see product</FirstBtn>
                </SecondInner>
              </SecondItem>
            )
          })}
        {query
          .filter(item => item.id === "Speaker_3")
          .map(node => {
            const {
              speakerName,
              speakerImage: { localFile },
            } = node
            const Image = getImage(localFile)
            return (
              <ThirdItem>
                <ThirdInner>
                  <ThirdImage
                    layout="fixed"
                    image={Image}
                    alt={speakerName}
                    height={200}
                  />
                  <ThirdText>
                    <h3>{speakerName}</h3>
                    <FirstBtn className="transparent-btn">see product</FirstBtn>
                  </ThirdText>
                </ThirdInner>
              </ThirdItem>
            )
          })}
      </InnerWrapper>
    </ProductWrap>
  )
}
//=== Third speakercard styling ====//
const ThirdItem = styled.article`
  width: 99vw;
  margin: auto;
  height: 100%;
`

const ThirdInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90vw;
  height: 100%;
  margin: auto;
  @media screen and (min-width: 785px) {
    max-width: 80vw;
    flex-direction: row;
    margin: 0;
  }
`

const ThirdImage = styled(GatsbyImage)`
  border-radius: var(--borderRadius-one);
  height: 300px;
  width: 90vw;
  @media screen and (min-width: 785px) {
    width: 50%;
  }
`

const ThirdText = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--white-three);
  border-radius: var(--borderRadius-one);
  width: 90vw;
  height: 300px;
  margin: 20px 0;
  padding: 40px 60px;
  @media screen and (min-width: 785px) {
    max-width: 50%;
    margin-left: 50px;
  }
`

//=== second speakercard styling ====//
const SecondItem = styled(BackgroundImage)`
  width: 90vw;
  height: 250px;
  margin: 20px auto;
  border-radius: var(--borderRadius-one);
  @media screen and (min-width: 785px) {
    width: 80vw;
    margin: 50px auto 50px;
  }
`
const SecondText = styled.h5`
  margin-bottom: 30px;
`
const SecondInner = styled.div`
  margin-top: 20%;
  margin-left: 20px;
  @media screen and (min-width: 785px) {
    margin-top: 10%;
    margin-left: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 5%;
    margin-left: 50px;
  }
`

//=== first speakercard styling ====//
const ProductWrap = styled.section`
  width: 99vw;
  margin: auto;
  height: 100%;
`
const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (min-width: 785px) {
    width: 80vw;
    margin: auto;
  }
`
const Text = styled.p`
  margin: 20px auto 30px;
`
const FirstItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${circleBg});
  background-color: var(--orange-one);
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  width: 90vw;
  margin: 20px auto;
  height: 500px;
  border-radius: var(--borderRadius-one);
  padding: 50px 25px;
  overflow: hidden;
  @media screen and (min-width: 785px) {
    width: 80vw;
    justify-content: space-around;
    margin: auto;
    height: 450px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`
const FirstImage = styled(GatsbyImage)`
  width: 200px;

  @media screen and (min-width: 1440px) {
    width: 400px;
    margin-top: 200px;
  }
`
const FirstText = styled.div`
  text-align: center;
  justify-content: space-evenly;
  color: var(--white-one);
  padding: 20px 10px 0;
  max-width: 300px;
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`
const FirstBtn = styled(Link)`
  margin-top: 60px;
`

//=== second speakercard styling ====//

export default Speakersection
