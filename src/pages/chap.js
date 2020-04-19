import React from "react"
import Info from "../components/info"
import Layout from "../components/layout"
import Move from "../components/move"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Mover from "../components/mover"

const Chap = props => (
    <Layout>
      <Info title="CHAP" description="We give the totally insecure Challenge Authentication Protocol a fast rundown, and teach you why only and absolute MADMAN would use it. And more." />
        <h1>CHAP: Challenge-Handshake Authentication Protocol </h1>
        <i>"The Challenge-Handshake Authentication Protocol (CHAP) authenticates a user or network host to an authenticating entity. That entity may be, for example, an Internet service provider.

CHAP provides protection against replay attacks by the peer through the use of an incrementally changing identifier and of a variable challenge-value. CHAP requires that both the client and server know the plaintext of the secret, although it is never sent over the network. Thus, CHAP provides better security as compared to Password Authentication Protocol (PAP) which is vulnerable for both these reasons." <br></br> -<a href="https://en.wikipedia.org/wiki/Challenge-Handshake_Authentication_Protocol">Wikipedia</a> </i>

<h3>Better than PAP</h3>
<p>CHAP is another PPP (Point-to-Point Protocol like PAP, used for authentication. It uses a three way handshake model to authenticate the client/users. <br></br>
1. The client/user requests access to a network/server, and the CHAP authentication server responds with a "challenge", which is a random number (nonce). <br></br>
2. The client/user receives the nonce and encrypts it using a shared symmetric encryption that only the CHAP server also has, with the MD5 (Message Digest 5) hashing algorithm. The client/user sends this back to the CHAP AS (Authentication Server).<br></br>
3. The CHAP server uses the symmetric encryption key that only it and the client/user know, as the key to decrypt the message from the client/user, which was the nonce it sent. If the message decrypts and the nonce matches, the CHAP server knows the client/user is.
4. While the user is connected, the CHAP server
</p>
<h3>Remainder</h3>
<p>All this back and forth communication takes place in the blink of an eye, you are not actually personally clicking a button to send the challenge back to the CHAP server. All you would see would be a log on screen, where you would enter your username and password before hitting enter. </p>
<Img  fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Using CHAP, this is what you would see.
            </p>

<p>Also of note, the shared symmetric encryption key that the client/user and server use is set up ahead of time. Usually by an admin, for a new employee when they join the company. This secret key is just used with the MD5 hash algorithm, it is not transmitted over the network.</p>
<Img  fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Chap initial configuration
            </p>


<h3>Wrap up</h3>
<p>CHAP is stronger than PAP. However it does use a weak hashing algorithm, MD5. CHAP is also only client/user authentication, the server is never authenticated to the client. The next step up for network authentication is MSCHAP, Microsofts version of CHAP. Obviously Kerberos still blows all of these out of the water. </p>
<Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>


            <Move to="/pap">Previous: PAP</Move> <Mover to="mschap" >Next: MSCHAP</Mover>
{/* 
<Link to="/PAP">Previous: PAP</Link> <Link style={{ float: `right`}} to="/mschap">Next: MSCHAP</Link> */}
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

    front2: file(relativePath: { eq: "chap.jpeg" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "chapset.png" }) {
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