import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Pap = props => (
    <Layout>
        <h1>PAP: Password Authentication Protocol</h1>
        <i>"Password Authentication Protocol (PAP) is a password-based authentication protocol used by Point to Point Protocol (PPP) to validate users. Almost all network operating system remote servers support PAP. PAP is specified in RFC 1334." <br></br> -<a href="https://en.wikipedia.org/wiki/Password_Authentication_Protocol">Wikipedia</a> </i>


        <h3>PAP is your last resort</h3>
        <p>This one is easy people, PAP sends your username AND password in plaintext over the network to authenticate with the server. Sounds like fun, right? PAP is supported on most servers as a legacy backup, for some rare case when everything else is failing I suppose. PAP is wide open to eavesdropping and MITM attacks. <br></br>
        PAP is used by PPP (Point to Point Protocol), with a two way handshake to authenticate a client trying to connect.
        </p>
        <Img  fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>PAP is the worst choice for authentication over a network.
            </p>

        <h3>Why is it still around?</h3>
        <p>Another kind of a trick question. Yes, PAP is not secure. However, PAP messages can be encapsulated instead a different protocol as the encrypted payload before being sent over the network. So PAP alone is not secure, but is still used by some apps/programs/software inside of other protocols securely. PAP is super lightweight, takes up barely any computation power, and can be used easily with devices have old hardware. Maybe an embedded legacy controller in a manufacturing plant, for example.</p>

        <h3>Wrap up</h3>
        <p>Not much to say here. PAP is old, and sends your password buck naked over the network. If you are into that sort of thing, go for it. CHAP (Challenge handshake Authentication Protocol) is the next step up from PAP. </p>

<Img  fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>PAP is the worst choice for authentication over a network.
            </p>
<Link to="/oauth">Previous: OAuth</Link> <Link style={{ float: `right`}} to="/pap">Next: PAP</Link>
    </Layout>
)
export default Pap

export const query = graphql`
  query {
   front: file(relativePath: { eq: "papdanger.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "papwhy.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "42pap.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front4: file(relativePath: { eq: "42oauth.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  

  }
`