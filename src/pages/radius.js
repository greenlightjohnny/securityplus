import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Radius = props => (
    <Layout>
        <h1>RADIUS: Remote Authentication Dial-In User Service</h1>
        <i>"Remote Authentication Dial-In User Service (RADIUS) is a networking protocol, operating on port 1812, that provides centralized Authentication, Authorization, and Accounting (AAA or Triple A) management for users who connect and use a network service." <br></br> -<a href="https://en.wikipedia.org/wiki/RADIUS">Wikipedia</a> </i>
        <p>RADIUS is a TCP/IP suite application layer networking protocol, which provides AAA. It is generally used to take input from a log on screen where you are asked to enter your username and password, and transmits that input to the remote RADIUS server for verification. You have probably used RADIUS before without knowing it. WPA2-Enterprise mode usually uses RADIUS as the back end, this is often seen at hotels or other places that either want to charge you for WiFi and/or track what you do while on the WiFi. </p>

        <h3>Security</h3>
        <p>RADIUS uses a shared secret symmetric encryption key and the MD5 (Message Digest 5) hashing algorithm to transmit encrypted passwords. RADIUS does not encrypt the username or anything else, password only. MD5 is also not considered a particularly strong hashing algorithm. Overall RADIUS is not considered very secure, both TACACS+ and Diameter offer more security. Despite this, RADIUS remains in widespread use.</p>
        <Img fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>MD5 is considered a weaker hashing algorithm, and RADIUS only bothers to encrypt the password during the authentication process.</p>
            <p>What is going on fam? RADIUS offers nothing that Diameter and TACACS+ don't, and is less secure? Why are we still using RADIUS??? Apparently because it can be a real pain to upgrade an older RADIUS authentication system to either. TACACS+ is also proprietary to Cisco, so less people use it. There are also some extensions available now for RADIUS (RadSec) that allow RADIUS to use TCP over TLS, instead of just UDP. However, for the exam, RADIUS is not as secure as TACACS+ or Diameter.</p>
            

        <h3>In the wild</h3>
        <p>So where would you see RADIUS used? A super common place is 802.1x, such as a WiFi Access Point (AP). WPA and WPA2 (WiFi Protected Access) running in Enterprise mode both typically use a RADIUS server to authenticate users wishing to join the network. Section 6.3 covers WPA and WPA2 in more depth. Basically WPA and WPA2 can run in two modes: PSK (Pre-Shared Key) or Enterprise. <br></br>WPA2-PSK is what you will typically see, if your friend comes over and you give them the password to your WiFi, you are giving him the PSK. It provides authorization, because they are now authorized to used it, but not authenticate because everyone is using the same PSK.<br></br>WPA2-Enterprise does not use a PSK, you are instead directed to a portal to log on. This might be a hotel that gives you a username and password when you get your room, or perhaps one of the scummy airport WiFi hotspots that want to charge you $10 for an hour. Most of those are using a RADIUS on the NAS (Network Access Server). You enter your information in (usually a username and password, possibly a credit card payment) and the RADIUS server sends it off to a remote authenticate server. The remote authenticate server will send a reply back to the RADIUS NAS, and the RADIUS server will grant or deny the client access to the network. </p>
        <div>
            <h3>WPA2-Enterprise mode using RADIUS</h3>
            <Img fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>As you can see, RADIUS is used to encapsulate EAP. You have almost certainly used RADIUS before. If you log onto a WiFi network with a password only, you are using PSK mode. However, if the WiFi Networks requires a username and password to log on, that requires an authentication server and that is usually running RADIUS</p>
            </div>

            <h3>More security</h3>
            <p>It's a bit of a trick question to be honest, RADIUS by itself is totally not considered the best choice. However, RADIUS can be encapsulated inside other secure protocols. IPsec, for example, can securely transport RADIUS across IP networks. So just saying RADIUS is not very secure is true, however, RADIUS used with IPsec to encapsulate it is perfectly secure.</p>

            <h3>RADIUS competition</h3>
            <p>Diameter and TACACS+ were both designed to fix RADIUS shortcomings. Those were considered to be the fact that RADIUS used UDP port 1812 (not as reliable as TCP) and the fact that RADIUS only encrypted the password during authentication (with the relatively weak MD5 hash). <br></br> 
            Both Diameter and TACACS+ offer AAA as well. Oddly enough, Diameter is used more widely with mobile devices and did not really end up replacing RADIUS.
            </p>

            <h3>RADIUS vs LDAP & Kerberos</h3>
            <p>These are typically used for different things, but they can all be used for authentication so you might see them appearing together on some test questions. <br></br>Kerberos is better for use in a large LAN for the employees to authenticate once and be provided with a token and SSO so they could access any LAN resource their authorization allowed without having to keep typing in their username and password. Keberos does not provide accounting, so it is not an AAA protocol like RADIUS. Kerberos would not really be seen protocol used to quickly let a previously unknown user access anything, it requires some setup. Kerberos was not designed with remote use in mind, RADIUS was.<br></br>
            RADIUS would be more commonly used to authenticate an previously unknown client to use a network, often seen with WPA/2-Enterprise mode. Tracking employees logging onto a company LAN is another, since RADIUS provides accounting. Gotta see what websites Sam from accounting visits during his lunch break! <br></br>
            LDAP is closer to Kerberos than RADIUS, normally used to authenticate on a LAN which the user is already logged onto, to access a directory. It is great for storing and accessing information such as addresses, passwords, phone numbers. LDAP can also be used as the database with many other applications/programs to store and retrieve usernames and passwords. Even RADIUS and Kerberos can use it.
            </p>
            <h3>Wrap up</h3>
            <p>Keep track of the RADIUS port, UDP 1812. You might have to fill in a configuration screen. Remember it only encrypts the users password during the authentication process, nothing else. Remember that it provides AAA, and is commonly used for remote log on/authentication. Remember it is commonly used as the back end for WPA/2-Enterprise 802.1x authentication, which requires an authentication server. Remember that Diameter and TACACS+ are more secure.</p>

 <Img fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}></p>

<Link to="/tacacs">Previous: TACACS+</Link> <Link style={{ float: `right`}} to="/saml">Next: SAML</Link>
    </Layout>
)

export default Radius



export const query = graphql`
  query {
   front: file(relativePath: { eq: "radius.jpeg" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "why2.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front3: file(relativePath: { eq: "42rad.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }


 front4: file(relativePath: { eq: "ipapp.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  

  }
`