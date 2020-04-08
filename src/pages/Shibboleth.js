import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Shibboleth = props => (
    <Layout>
        <h1>Shibboleth: SSO</h1>
        <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>"Shibboleth is a single sign-on log-in system for computer networks and the Internet. It allows people to sign in using just one identity to various systems run by federations of different organizations or institutions. The federations are often universities or public service organizations." <br></br>-https://en.wikipedia.org/wiki/Shibboleth_(Shibboleth_Consortium)</p>
        <p>So</p>

        <div>
            <h3>The Shibboleth logo. Not bad.</h3>
            <Img fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Yeah cool, but what does it Shibboleth do??.</p>
            </div>
        <h3>What is it?</h3>
        <p>Shibboleth is an open sourced SAML based SSO. Apparently used by Universities such as Temple, MIT, UVA, and Oxford to name a few. It works basically the same as SAML, with the principal/client/web browser, the idp (identity Provider), and the Service Provider (SP).<br></br>
        <a href="https://www.shibboleth.net/index/basic/">How Shibboleth Works, official website</a>
        </p>

        <h3>Shibboleth = SAML?</h3>
        <p>Apparently pretty much. Shibboleth is open source, but can also act as an idP that other organizations use to verify log ons for a fee. Non-profits and academic institutions pay between $2,960 and $8,880 per year depending on size to act as the idP for them. Seems like a pretty good deal, instead of having to keep your own servers for SSO.</p>


<Link to="/saml">Previous: SAML</Link> <Link style={{ float: `right`}} to="/openidconnect">Next: OpenId Connect</Link>
    </Layout>
)

export default Shibboleth

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