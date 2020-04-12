import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Chap = props => (
    <Layout>
        <h1>IEEE 802.1x </h1>
        <i>"IEEE 802.1X is an IEEE Standard for port-based Network Access Control (PNAC). It is part of the IEEE 802.1 group of networking protocols. It provides an authentication mechanism to devices wishing to attach to a LAN or WLAN. " <br></br> -<a href="https://en.wikipedia.org/wiki/IEEE_802.1X">Wikipedia</a> </i>
        <Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Well this is already off to a good start! Jesse Walker is one of the people who wrote the 802.1x standard for the IEEE. Obviously he was not exactly pleased with what they were forced to do. 
            </p>
            
        <h3>Where to start?</h3>
        <p>802.1x first became a standard in 2000, when the IEEE (Institute of Electrical and Electronics Engineers) created it out of the need for a stronger authentication mechanism. 802.1x essentially sets standards for using EAP (Extensible Authentication Protocol) over IEEE 802. 802 is a set of standards that deals with LANs and MANs. So 802.1x is just a standard for using EAP on LANs and MANs. This is known as EAPOL (EAP Over LAN). EAP is a framework, it does not actually transmit data. This means EAP is not a "wire" protocol, and needed to be carried across the network by something else. That is what EAPOL does, and 802.1x defines the EAP encapsulation. <br></br> 
        
        802.1x is a standard created for stronger authentication. </p>

        <h3>PSK vs Enterprise</h3>
        <p>WPA and WPA2 can operate either in Open, PSK, or Enterprise mode. In PSK (Pre-Shared Key) mode you simply enter in the WiFi password (PSK) and you gain access to the network, it does not use 802.1x authentication or EAP.<br></br>
         With Enterprise mode, 802.1x is used for authentication. It is for more secure than PSK. 802.1x uses EAPOL to encapsulate the EAP message. Enterprise mode requires an authentication server, while PSK mode does not. <br></br>
        Enterprise mode is sometimes called "802.1x mode" or you will see it written out as "Enterprise 802.1x" or "WPA2-802.1x".<br></br>
        If you see "Enterprise mode" in regards to network access, you know it is using the 802.1x standard.
        </p>
       

        <h3>802.1x authentication</h3>
        <p>The 802.1x authentication process has three separate parties: <br></br>
        1. The supplicant. This is the user/client/device trying to access the LAN. <br></br>
        2. The authenticator. This is something on the LAN that the supplicant is trying to connect to, which has a link between the supplicant and the authentication server (AS), usually a WAP or Ethernet switch.<br></br>
        3. The authentication server: This is a remote server that either approves or denies requests to join the network.<br></br>
        <p>The supplicant (client/user/device) needs to get an EAP authentication method message to the remote authentication server (AS). the 802.1x EAPOL standard is used to encapsulate that EAP message and transmit it over the LAN to the authenticator (often this is the WAP). <br></br>
        The authenticator receives the EAPOL message and strips off the EAPOL encapsulation, leaving just the EAP method. The authenticator than encapsulates the EAP method yet again, this time almost always using RADIUS. Next the authenticator sends out the RADIUS message to the remote authentication server, which is not on the LAN. <br></br>The authentication server receives the message and strips away the outer RADIUS layer to reveal the EAP method inside. The EAP method carries an authentication method, which depends on the EAP method. The authentication server can read this and verify the client, sending an EAP reply back to the authenticator via RADIUS encapsulation.<br></br>
        The authenticator receives the reply, strips away the RADIUS encapsulation, and sends it off again to the client wrapped inside EAPOL.
        </p>
   
        <Img  fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>As you can see, 802.1x is used between the supplicant and authenticator. EAPOL, which is part of 802.1x, encapsulates the EAP method.802.1x is a standard for transporting EAP across LANs. The authentication server is not on the LAN, so RADIUS is used to encapsulate the EAP method and transport it from the authenticator to the authentication server.</p>

        </p>

        <h3>Why EAP?</h3>
        <p>So 802.1x uses EAPOL to carry the EAP method from the supplicant to the authenticator. The authentication strips off the EAPOL and encapsulates it using RADIUS, and sends it off to the authentication server. The authentication strips off the RADIUS and reads the EAP method within. So the EAP method goes end-to-end, from the supplicant to the authentication server. It is carried first over the LAN by EAPOL, and next over the network (usually the internet) by RADIUS<br></br>
        So why was the EAP picked as the authentication framework? Well because the IEEE had their hands tied by large hardware manufactures who were already using RADIUS authentication servers, even though the authentication was weak. They insisted that they be able to keep using RADIUS and their old servers for authentication. So the IEEE had to create an authentication method which was stronger than what was currently being used, but was also compatible with the existing RADIUS authentication system. <br></br>
        EAP was picked for this, because it could be carried by RADIUS and allowed for many different authentication types, called EAP methods. EAPOL was created by 802.1x to carry the EAP method to the authenticator, where the existing RADIUS protocol would carry it to the authentication server.

        </p>
        <h3>Nothing makes sense!</h3>
        <p>If things start to seem a bit convoluted don't worry, it is not a very logical system. It is like having a rusting car, and instead of properly fixing it you just paint over the rust. Next year the rust shows through, so you paint it again. That is where we are at with 802.1x authentication, it is a Russian doll of old tech encapsulated with newer tech. Even the engineers who wrote 802.1x did not like it.</p>
        <Img  fluid={props.data.front5.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}></p>
        
        <Img  fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

           
            <p>We are just scratching the 802.1x surface, and grossly oversimplifying the 802.1x authentication process. For example, some EAP methods have a 22 step authentication process, that is a lot of messages being sent back and forth. Here is a little reading if you really wanna see more:<br></br>
            <a href="http://www.tldp.org/HOWTO/pdf/8021X-HOWTO.pdf">802.1X Port−Based Authentication</a>

            <a href="https://www.cisco.com/c/en/us/td/docs/solutions/Enterprise/Security/TrustSec_1-99/Dot1X_Deployment/Dot1x_Dep_Guide.pdf">Wired 802.1X Deployment Guide</a><br></br>

            <a href="https://www.intel.com/content/www/us/en/support/articles/000006999/network-and-i-o/wireless-networking.html"> 802.1X Overview and EAP Types </a><br></br>

            <a href="https://www.omnisecu.com/tcpip/how-ieee-802.1x-port-based-authentication-works.php">How IEEE 802.1X (dot1x) Port Based Authentication works</a><br></br>

            <a href="http://ieee802.org/16/liaison/docs/80211-05_0123r1.pdf">802.11i Overview</a><br></br>

            <a href="http://www.winlab.rutgers.edu/pub/docs/JesseWalker.pdf">A History of 802.11 Security</a><br></br>

            <a href="https://aswinchandran.wordpress.com/eap/">What is 802.1X?</a><br></br>

            <a href="https://wirelesslywired.com/2017/07/05/following-the-802-1x-aaa-process-with-packet-captures/">Following the 802.1X AAA process with Packet Captures</a>

            <a href=""></a>
            <a href=""></a>
            </p>

        <h3></h3>
        <h3>Wrap up</h3>
        <p>802.1x is an IEEE standard that WPA and WPA2 can use for PNAC (Port-based Network Access control) authentication. 802.1x can be set to hanlde the authentication of devices trying to connect to the LAN locally, such as through a WAP or physical port. 802.1x is used for more strict and secure authentication, and Enterprise mode requires it. 802.1x uses the EAP framework as it's chosen authentication protocol. EAP can use many different authentication methods, but it is just a framework and does not transmit them. 802.1x defines EAPOL as the means to transport the EAP authentication message from the supplicant (client/user/device) who is trying to connect to the LAN, to the authenticator device.</p>

<Img  fluid={props.data.front6.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/eap">Previous: EAP</Link> <Link style={{ float: `right`}} to="/radiusfederation">Next: RADIUS Federation</Link>
    </Layout>
)
export default Chap

export const query = graphql`
  query {
   front: file(relativePath: { eq: "802eapol.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "radius.jpeg" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "802rabbit.jpeg" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front4: file(relativePath: { eq: "802no.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }


      front5: file(relativePath: { eq: "ohdear.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front6: file(relativePath: { eq: "63aa.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

  

  }
`