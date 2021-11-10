import React from "react"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FaAngleRight } from "react-icons/fa"
const Productmodal = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiProductModal {
        nodes {
          id
          productName
          productCta
          productImage {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 200, placeholder: BLURRED, layout: FIXED)
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Modalwrapper>
      <InnerWrapper>
        {data.allStrapiProductModal.nodes.map(item => {
          const {
            id,
            productName,
            productCta,
            productImage: { localFile },
          } = item
          const Image = getImage(localFile)
          return (
            <ModalCard key={id}>
              <CardImage
                image={Image}
                layout="fixed"
                placeholder="blurred"
                alt={productName}
                height={100}
                width={100}
              />
              <h5>{productName}</h5>
              <CardCta>
                <h6>{productCta}</h6>
                <Arrow />
              </CardCta>
            </ModalCard>
          )
        })}
      </InnerWrapper>
    </Modalwrapper>
  )
}
const Modalwrapper = styled.main`
  width: 99vw;
  margin: auto;
  height: 100%;
`
const InnerWrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 785px) {
    max-width: 80vw;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px auto 50px;
  }
`
const ModalCard = styled.article`
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--white-three);
  background-size: 50%;
  width: 90vw;
  margin: 20px auto;
  height: 300px;
  border-radius: var(--borderRadius-one);
  :hover {
    cursor: pointer;
  }
  :not(:first-child) {
    @media screen and (min-width: 785px) {
      margin-left: 20px;
    }
  }
`
const CardImage = styled(GatsbyImage)`
  height: 200px;
  width: 200px;
`
const CardCta = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`
const Arrow = styled(FaAngleRight)`
  margin-left: 10px;
  color: var(--orange-one);
`

export default Productmodal
