import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Chap = props => (
    <Layout>
        <h1>Cryptographic protocols </h1>
        <p>Here we will be covering some of the cryptography used with WiFi, in particular with WPA and WPA2 (Wi-Fi Protected Access).</p>

        <h3>WPA: Wi-Fi Protected Access</h3>
        <p>WPA was intended as a temporary replacement for WEP (Wired Equivalent Privacy) until the more secure WPA2 was ready. WEP had lots of problems, and extremely weak encryption was one of them. You know WEP most have been bad when the protocol they replaced it with (WPA) was already considered weak, and just a temporary measure, and yet still better than WEP. <Img  fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>How come no one else teaches you these tricks? It's brilliant!
            </p>  </p>

            <p>WPA was rushed to the market in 2003, a joint project between our old friends the IEEE and a group called the "Wi-Fi Alliance". The goal was to replace WEP with something more secure that could still run on the legacy WAP (Wireless Access Point) hardware already in place. WEP was terrible, especially in 1997 when it first came out. It used a super short 40-bit key, due to the US Government restricting the export on cryptographic technology. Here is how it went down:
            <Img  fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Hahaha, ok seriously WEP had a ton more problems, but this did not help it any!
            </p>
            </p>
            <p>WPA tried to fix some of the problems with WEP by using TKIP, Temporal Key Integrity Protocol. TKIP was created just for this. TKIP uses a dynamic 128-bit key for each packet sent, and is based on the RC4 stream cipher which WEP also uses. The RC4 cipher is not considered very strong, but was still used for WPA because WPA had to be able to run on the existing WEP devices, via firmware upgrade. </p>

            <h3>WPA2: Wi-Fi Protected Access 2</h3>
            <p>WPA2 hit the market in 2004, one year after WPA, and was much stronger than WPA. It added CCMP (Counter Mode Cipher Block Chaining Message Authentication Code Protocol) as more secure encryption option than TKIP. CCMP is based on the AES (Advanced Encryption Standard) and is much more secure than the RC4 based TKIP cipher. WPA2 could still use TKIP if needed, allowing older devices that could not run CCMP to use WPA2 WAPs.
            <Img  fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>
            </p>

            <h3>Modes: Open, PSK, Enterprise</h3>
            <p>There are covered later on <Link to="/pskenterprise">PSK vs Enterprise</Link> in depth. For now, just remember the WPA and WPA2 operate in one of the three modes depending on how it was set up. Open requires nothing to connect, PSK (Pre-Shared Key) asks for a password, and Enterprise uses a remote authentication server for verification and is the most secure. PSK is what you normally use at home and for smaller businesses. Enterprise is seen in larger corporate environments. Open is often used by places such as coffee shops to allow anyone to easily connect, usually being sent to a captive portal to click an "agree to terms" button.</p>

            <h3>Real world</h3>
            <p>You, as the user connecting to a WiFi AP, do not have much of a choice for picking between WPA, WPA2, TKIP, CCMP, Open, PSK, Enterprise. All those selections are done by the admin (owner) of that WAP. Depending you your device it might say what type of WAP it is on the selection screen, and what mode it is running.<Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Hovering on a Windows system revealing that you are connected to a WPA2 WAP that is running in PSK mode. Different devices have different ways of seeing the WiFi connection type.
            </p>

            <h3>Wrap up</h3>
            <p>Remember the WPA and WPA2 modes, and encryption protocols. You might be asked to pick the most secure option (WPA2-Enterprise mode using CCMP), the least secure, or the best option for a particular situation. Remember what ciphers TKIP and CCMP are based on, and which is stronger.</p>
</p>

<Img  fluid={props.data.front5.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/cryptography">Previous: Cryptography</Link> <Link style={{ float: `right`}} to="/eap">Next: EAP</Link>
    </Layout>
)
export default Chap

export const query = graphql`
  query {
   front: file(relativePath: { eq: "wepmeme2.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "wepmeme3.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "options.jpeg" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front4: file(relativePath: { eq: "wifi4.jpeg" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front5: file(relativePath: { eq: "63a8.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }



  

  }
`