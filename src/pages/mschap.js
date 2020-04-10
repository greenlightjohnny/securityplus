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

<h3>Better than CHAP</h3>
<p>Microsoft made their own version of CHAP. Shockingly, they still managed to fudge things up. They created two versions, MS-CHAPv1 and MS-CHAPv2.<br></br>
MS-CHAP formats the challenge response packet so that it is for Windows systems only. But why?
MS-CHAP uses a hash of the shared secret key/password to as the encryption key for the communication, which helps security since now the plaintext shared symmetric encryption key does not have to kept stored in plain text. Still, they did use the MD4 hash to store it, which is weaker than MD5.
</p>

<h3>MS-CHAPv1</h3>
<p>This operates very closely to CHAP. So close, in fact, that you might wonder why on earth Microsoft created it. The big difference is the not needing to store a plaintext of the secret key, and instead hashing it. <br></br>

</p>

<h3>MS-CHAPv2</h3>
MS-CHAPv2 steps up the game a notch, and offers mutual client-server authentication. This helps prevent MITM attacks, since the client/user verifies they are talking to the correct server.
<p>
</p>




<h3>Use cases</h3>
<p>MS-CHAP is more secure than PAP and CHAP. It does however use DES and MD4, both of which are considered weak cryptographic algorithms. Despite this it is still in use today.<br></br> 
WiFi networks often use MS-CHAPv2 for authentication, just encapsulated inside other secure protocols for transportation. Protected Extensible Authentication Protocol (PEAP) creates a TLS tunnel and carries the MS-CHAPv2 authentication inside of it. WPA and WPA2 both frequently use PEAP to send the authentication between the client/user and WAP (Wireless Access Point)<br></br>
For example, you use your Windows 10 laptop to enter the PSK (Pre-Shared Key) for the password to join a WiFi network at a coffee shop. In the background, your computer might use PEAP to encapsulate an MS-CHAPv2 message with the PSK, and send it to the WAP in an encrypted TLS tunnel. The WAP would receive it, strip off the outer PEAP message, and take a look at the MS-CHAPv2 authentication request inside.
</p>

<h3>Real world</h3>
<p>Like most other authentication protocols, you have probably used MS-CHAP without knowing it. For example below, a Windows 10 Wi-Fi log on screen. It could very likely use MS-CHAP to transport the PSK you enter into it to the WAP, first encapsulating it inside a secure PEAP TLS tunnel. </p>
<Img  fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Most of the time you won't have a clue you are using MS-CHAP. If you right click and access something like "advanced" or "settings" you might be able to tell.
            </p>

            <Img  fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Here you can see exactly what protocols you are using in the background to connect to the Wi-Fi network. YOu can tell it is WPA/WPA2 in Enterprise mode, which means there is an authentication server. You can see that PEAP will be used to carry the authentication request from your wireless device to the WAP. And you can tell what authentication protocol will be used to transport your username and password, MS-CHAPv2.
            </p>
<p>As you can tell, MS-CHAP usage is basically invisible to the ender user/client. Unless you are a system admin you generally will not be configuring MS-CHAP. The CompTIA wants to test you on it though, even though it should really be on a separate exam for system admins.</p>

<h3>Wrap up</h3>
<p>MS-CHAP is stronger than CHAP and PAP. It is not considered secure by itself, but still sees widespread use by using other protocols to encapsulate and carry it for protection. MS-CHAPv1 does not offer mutual authentication, but Ms-CHAPv2 does. PEAP is often used with 802.1x to transport MS-CHAP over a TLS tunnel for WPA/WPA2 authentication.</p>
<Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/PAP">Previous: PAP</Link> <Link style={{ float: `right`}} to="/mschap">Next: MSCHAP</Link>
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