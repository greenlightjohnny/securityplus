import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Chap = props => (
    <Layout>
        <h1>MS-CHAP: Microsoft CHAP </h1>
        <i>"MS-CHAP is the Microsoft version of the Challenge-Handshake Authentication Protocol, CHAP. The protocol exists in two versions, MS-CHAPv1 (defined in RFC 2433) and MS-CHAPv2 (defined in RFC 2759" <br></br> -<a href="https://en.wikipedia.org/wiki/MS-CHAP">Wikipedia</a> </i>

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
       
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "mschapwi.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "mschap3.jpeg" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front4: file(relativePath: { eq: "42mschap.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  

  }
`