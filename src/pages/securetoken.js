import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Secure = props => (
    <Layout>
        <h1>Secure Token  </h1>
        
        <h3>What the fudge is this?</h3>
        <p>I'm honestly not sure. All the other items on the 4.2 list are actual app/programs/software. Secure Token appears to be more of a concept, or just someone asleep at the wheel. It really does not fit in with the rest the list. I mean if they mean a token from something like SSO via Kerberos, OpenID Connect, or SAML, they are all a bit different. Unless they just want you to know what authentication services can use secure tokens. Who Knows, I'm emailing CompTIA to ask.</p>

<Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/mschap">Previous: MSCHAP</Link> <Link style={{ float: `right`}} to="/identityandaccessmanagement">Next: Done! Back to 4.0</Link>
    </Layout>
)
export default Secure

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