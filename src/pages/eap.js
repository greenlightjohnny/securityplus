import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Chap = props => (
    <Layout>
        <h1>EAP: Extensible Authentication Protocol </h1>
        <i>"Extensible Authentication Protocol (EAP) is an authentication framework frequently used in network and internet connections. It is defined in RFC 3748" <br></br> -<a href="https://en.wikipedia.org/wiki/Extensible_Authentication_Protocol">Wikipedia</a> </i>
        <p>EAP comes from the Internet Engineering Task Force (IETF) which is an open standards organization of volunteers that create internet standards, such as TCP/IP suite. EAP is a framework only, EAP supports many different types of authentication. Extensible literally means "capable of being extended", so EAP is not locked down to using a specific authentication method. This is awesome because it allows for future flexbility. No one wants to be stuck using an authentication method that is not secure, such as being forced to use DES for the the encryption. </p>
        <p>RFC 3748 (which stand for Request For Comments) is result of asking anyone who cared to submit their opinion on building an authentication framework, and using it to create something that was an overall consensus of these opinions. And so, EAP was born. You can read the original <a href="https://tools.ietf.org/html/rfc3748" >RFC 3748</a>. </p>

        <h3>EAP transport</h3>
        <p>EAP is not a "wire" protocol, which means it does not have its own method of moving around networks, and relies on other protocols to transport the chosen EAP method.</p>
        <h3>EAP methods</h3>
        <p>Their are apparently over 40 different EAP methods. So that is over 40 different ways of authentication, a wide selection. CompTIA only lists a few of these in the objectives though: PEAP, EAP-FAST, EAP-TLS, and EAP-TTLS.  </p>
        <h3>PEAP: Protected EAP</h3>
        <p>PEAP is a protocol for encapsulating and transporting an EAP method inside a TLS tunnel. 802.1x, RADIUS, and Diameter, can also encapsulate and transport EAP methods. PEAP does require the server to have a certificate, but not the client.<br></br>
        PEAP was created by Cisco, RSA Security, and Microsoft. PEAP is commonly used to transport the EAP-MSCHAPv2 and EAP-GTC methods, but can carry others.
        </p>
        <h3>EAP-FAST: EAP Flexible Authentication via Secure Tunneling </h3>
      
        <p>  This is an EAP method created by Cisco. It uses a TLS tunnel for security, and supports certificates if you want, but the certificates are not mandatory. Apparently it was supposed to replace LEAP (Lightweight EAP) which is now not considered secure due to it using MS-CHAP.</p>
        <h3>EAP-TTLS</h3>
        <p>Uses a TLS tunnel to provide security. It requires the server to have a certificate, but it client having a certificate is optional. More secure than EAP-FAST and LEAP due to at least one certificate being required (unless EAP-FAST uses both optional certificates). Provides server authentication, and possible mutual client-server authentication.</p>
        <h3>EAP-TLS</h3>
        <p>The most secure on the list, it has mutual client-server authentication. Both the client and server must have a certificate. It also use a TLS tunnel for security.</p>
        
        <h3>EAP use cases</h3>
        <p>EAP is most commonly used with with WPA-Enterprise, and WPA2-Enterprise. Of course it does not have to be WiFi, 802.1x can apply to wired LAN connections as well. Enterprise mode uses the 802.1x standard for authentication, and the 802.1x standard defines the use of EAP over LAN (EAPOL) for transporting the EAP authentication methods. Typically this is all a background process, when you select an Enterprise WiFi network to join you will be prompted with something like the below photo:<Img  fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Note that does say "WPA2 Enterprise" and asks for both a username and password. You know Enterprise mode uses 802.1x, which uses EAP for the authentication framework.
            </p></p>


            
            <p>Here is an example where you can see more of the settings:
            <Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Here you can tell that PEAP is carrying MSCHAPv2 as the authentication method. It will all be transported from the supplicant, via EAPOL, to the authenticator on the LAN.
            </p>
            </p>


 <p>Here EAPOL is being used to transport the EAP method, followed by RADIUS transporting the same EAP method. This is in a WPA-Enterprise or WPA2-Enteprise setting, which uses 802.1x.
            <Img  fluid={props.data.front5.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>EAPOL is used for transporting EAP across the LAN, as defined by the 802.1x standard.
            </p>
            </p>
        <h3>Wrap up</h3>
        <p>We just covered EAP, but you are about to see it again in the section on 802.1x. It is important that you remember which EAP methods require certificates, and which support them.</p>

        

<Img  fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/CCMP">Previous: TKIP CCMP</Link> <Link style={{ float: `right`}} to="/802">Next: 802</Link>
    </Layout>
)
export default Chap

export const query = graphql`
  query {
   front: file(relativePath: { eq: "63a2.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "ex4.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "ex13.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front4: file(relativePath: { eq: "mschap3.jpeg" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      


  front5: file(relativePath: { eq: "802.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

  }
`