import React from "react"

import Layout from "../components/layout"
import Info from "../components/info"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Chap = props => (
    <Layout>
      <Info />
        <h1>MS- </h1>
        <i>"" <br></br> -<a href="https://en.wikipedia.org/wiki/MS-CHAP">Wikipedia</a> </i>

<Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/chap">Previous: CHAP</Link> <Link style={{ float: `right`}} to="/securetoken">Next: Secure Token</Link>
    </Layout>
)
export default Chap

export const query = graphql`
  query {
   front: file(relativePath: { eq: "papdanger.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "mschapwi.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "mschap3.jpeg" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front4: file(relativePath: { eq: "42mschap.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  

  }
`