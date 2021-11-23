import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Productmodal from "../components/Productmodal"
import AddReview from "../components/AddReview"
const Catergory = ({ data }) => {
  console.log(data)
  const title = data.strapiProductModal.productName

  return (
    <Layout>
      <Container>
        <Hero>
          <HeroText>{title}</HeroText>
        </Hero>
        <InnerContainer>
          {data.strapiProductModal.catergory.map(item => {
            const {
              id,
              addText,
              productDesc,
              productName,
              image: { localFile },
            } = item
            const Image = getImage(localFile)
            return (
              <CatergoryCard key={id}>
                <ImageWrap>
                  <CardImage
                    image={Image}
                    placeholder="blurred"
                    layout="fixed"
                    width={200}
                    alt={productName}
                  />
                </ImageWrap>
                <ProdText>
                  <ProdCta>{addText}</ProdCta>
                  <ProdName>{productName}</ProdName>
                  <ProdDesc>{productDesc}</ProdDesc>
                  <ProdBtn className="orange-btn">see product</ProdBtn>
                </ProdText>
              </CatergoryCard>
            )
          })}
        </InnerContainer>
        <Productmodal />
        <AddReview />
      </Container>
    </Layout>
  )
}

const Container = styled.section`
  width: 100%;
  height: 100%;
`
const Hero = styled.div`
  height: 100px;
  width: 100vw;
  background: var(--black-two);
  color: var(--white-one);
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  margin: auto;
`
const InnerContainer = styled.div`
  height: 100%;
  width: 90vw;
  margin: auto;
  padding: 40px 0;
  @media screen and (min-width: 1440px) {
    width: 80vw;
  }
`

const HeroText = styled.h4``

const ImageWrap = styled.div`
  width: 100%;
  background: var(--white-three);
  margin: auto;
  display: grid;
  place-items: center;
  border-radius: var(--borderRadius-one);
  height: 400px;
  @media screen and (min-width: 1440px) {
    margin-top: 60px;
  }
`

const CatergoryCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
  :nth-child(2n) {
    @media screen and (min-width: 1440px) {
      flex-direction: row-reverse;
    }
  }
`
const CardImage = styled(GatsbyImage)``

const ProdText = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  @media screen and (min-width: 1440px) {
    text-align: left;
    align-items: flex-start;
    margin: 0 60px;
  }
`
const ProdCta = styled.h6`
  margin: 15px 0;
  color: var(--orange-one);
`
const ProdName = styled.h4``
const ProdDesc = styled.p`
  margin: 15px 0;
`
const ProdBtn = styled(Link)`
  margin-bottom: 15px;
`

export const query = graphql`
  query getCatergory($productName: String) {
    strapiProductModal(productName: { eq: $productName }) {
      productName
      catergory {
        id
        addText
        productDesc
        productName
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 200)
            }
          }
        }
      }
    }
  }
`
export default Catergory
