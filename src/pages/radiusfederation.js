import React from "react"

import Layout from "../components/layout"
import Info from "../components/info"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Chap = props => (
    <Layout>
      <Info title="RADIUS Federation" description="RADIUS Federation is a vague concept the CompTIA have whipped out of thin air for the Security+ exam. There is honestly no real set in stone definition, but here we are anyway."/>
        <h1>RADIUS Federation </h1>
        <i>"Remote Authentication Dial-In User Service (RADIUS) is a networking protocol, operating on port 1812, that provides centralized Authentication, Authorization, and Accounting (AAA or Triple A) management for users who connect and use a network service." <br></br> -<a href="https://en.wikipedia.org/wiki/RADIUS">Wikipedia</a> </i>

        <h3>More RADIUS</h3>
        <p>We covered RADIUS back in section 4.2 <Link  to="/radius">RADIUS</Link>. A RADIUS federation is just multiple organizations that use the same RADIUS server for authentication, so a user from one network could use their same username and password to access the other network. This is a form of SSO, depending on who you ask. The RADIUS Wikipedia never talks about SSO, but does mention roaming.</p>

        <h3>Is it SSO?</h3>
        <p>SSO (Single Sign On) has two different meanings apparently.<br>
        </br>1.Sign on once and you don't have to keep entering your username and password in to access anything else you are authorized to access. Kerberos does this for your LAN resources, as an example. Or maybe you would count being signed into your Google account, and visiting YouTube and already being signed in as SSO.<br></br> 
        2. Use a single account username and password to sign onto different services/apps/websites/networks. An example of this is OpenID Connect, allowing you to use your Facebook account to sign onto a random blog and post a comment telling them why they are incorrect. You will notice I do not have a comment section, for this very reason.</p>

        <h3>I am not sure</h3>
        <p>A RADIUS Federation is used to allow one set of credentials to be used to authenticate on any network that belongs to that Federation. This is called "roaming" on Wikipedia and they give the example of eduroam, which allows Federation members from different educational institutes to use their credentials to authentication on the network of other members when visiting them. They don't call it roaming, however, or SSO.</p>

        <h3>Wrap up</h3>
        <p>This one is not cut and dry folks, it is on the list to email CompTIA about.</p>

<Img  fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/802">Previous: 802</Link> <Link style={{ float: `right`}} to="/pskenterprise">Next: PSK vs Enterprise</Link>
    </Layout>
)
export default Chap

export const query = graphql`
  query {
   front: file(relativePath: { eq: "63a5.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 800) {
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