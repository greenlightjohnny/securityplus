import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Openidconnect = props => (
    <Layout>


        <Link to="/shibboleth">Previous: Shibboleth</Link> <Link style={{ float: `right`}} to="/radius">Next: RADIUS</Link>
    </Layout>
    
    
)

export default Openidconnect
export const query = graphql`
  query {
   front: file(relativePath: { eq: "Shibboleth_logo.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "saml3.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "details.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

  

  }
`