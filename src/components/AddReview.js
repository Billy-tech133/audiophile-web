import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const AddReview = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiAddreview {
        nodes {
          addDesc
          addTitle
          id
          addImage {
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
  const query = data.allStrapiAddreview.nodes
  return (
    <AddWrapper>
      {query.map(item => {
        const {
          id,
          addDesc,
          addTitle,
          addImage: { localFile },
        } = item
        const Image = getImage(localFile)
        return (
          <InnerAdd key={id}>
            <AddImage image={Image} layout="constrained" alt={addTitle} />
            <AddText>
              <TextInner>
                <AddTitle>{addTitle}</AddTitle>
                <p>{addDesc}</p>
              </TextInner>
            </AddText>
          </InnerAdd>
        )
      })}
    </AddWrapper>
  )
}
const AddWrapper = styled.article`
  width: 99vw;
  margin: auto;
  height: 100%;
`
const InnerAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 100%;
  margin: 50px auto 50px;
  @media screen and (min-width: 785px) {
    max-width: 80vw;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`
const AddImage = styled(GatsbyImage)`
  border-radius: var(--borderRadius-one);
  @media screen and (min-width: 785px) {
    width: 80vw;
  }
  @media screen and (min-width: 1440px) {
    max-width: 50%;
  }
`
const AddText = styled.article`
  text-align: center;
  @media screen and (min-width: 1440px) {
    text-align: left;
    margin-right: 50px;
    width: 50%;
  }
`
const TextInner = styled.div``

const AddTitle = styled.h4`
  margin: 20px 0;
`

export default AddReview
