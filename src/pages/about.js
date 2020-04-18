import React from 'react';
import Img from "gatsby-image"
import Layout from '../components/layout'
import { graphql } from "gatsby"


const About = (props) => (


    <Layout>
        <h1>About</h1>
        <p>Nothing to see here folks, move along.</p>
        <div><Img fluid={props.data.front2.childImageSharp.fluid} /></div>
        

    </Layout>
)





export const query = graphql`
  query {
   front: file(relativePath: { eq: "high.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "highsbw.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front3: file(relativePath: { eq: "follow.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }


 front4: file(relativePath: { eq: "42ker.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  

  }
`


export default About