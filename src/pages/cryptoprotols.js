import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Chap = props => (
    <Layout>
        <h1>Cryptographic protocols </h1>
        <p>Here we will be covering some of the cryptography used with WiFi, in particular with WPA and WPA2 (Wi-Fi Protected Access.</p>

        <h3>WPA: Wi-Fi Protected Access</h3>
        <p>WPA was intended as a temporary replacement for WEP (Wired Equivalent Privacy) until the more secure WPA2 was ready. WEP had lots of problems, and extremely weak encryption was one of them. You know WEP most have been bad when the protocol they replaced it with (WPA) was already considered weak, and just a temporary measure, and yet still better than WEP. <Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>  </p>

<Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/chap">Previous: CHAP</Link> <Link style={{ float: `right`}} to="/securetoken">Next: Secure Token</Link>
    </Layout>
)
export default Chap

export const query = graphql`
  query {
   front: file(relativePath: { eq: "wepmeme.png" }) {
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