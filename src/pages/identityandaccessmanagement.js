import React from "react"
import Layout from "../components/layout"

import { graphql } from "gatsby"
import Img from "gatsby-image"

const Idman = props => (
    
    <Layout>
        <h1>4.0 Identity and Access Management</h1>

        <div>
            <h3></h3>
        </div>
    </Layout>


)

export const query = graphql`
  query {
   front: file(relativePath: { eq: "objectives2.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "details.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  

  }
`
export default Idman