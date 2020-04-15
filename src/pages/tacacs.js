import React from "react"
import Info from "../components/info"
import Layout from "../components/layout"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Tacacs = props => (
    <Layout>
      <Info title="TACACS+: Terminal Access Controller Access Control System Plus"  description="Wow, what an acronym. Someone is having a laugh. Cisco, why would you allow this to move forward??" />
        <h1>TACACS+: Terminal Access Controller Access control System Plus</h1>
        
        <div>
            
            <Img fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>You might think I am making this name up. I wish I was. Rest assured, it is very very real. There is plenty of blame to go around for this one. Names will be named. Cisco, I'm looking at you. </p>
            
            </div>
        

        <h3>What is this abomination??!</h3>
        <p>TACACS+ is a remote AAA (Authentication, Authorization, Accounting) protocol. Basically you use it to log on to networks, both remote and LAN. There was an original TACACS, with no plus, from way back in 1984. In the 1990's the team at Cisco thought that another remote network AAA protocol, RADIUS (Remoate Dail-In User Authentication Service),was just not good enough. So Cisco changed a bunch of stuff around on TACACS, slapped a "+" sign on the end, and packed things up for the weekend. <br></br>
        RADIUS was a UDP protocol, which was not as reliable as TCP for remote log ons, so TACACS+ uses TCP port 49. TACACS+ also encrypts everything it can during the authentication process, while RADIUS only encrypted the user password. Also produced as a replacement for RADIUS was Diameter. Nope, no acronym here, just some peeps having a laugh with a little word play.</p>

        <Img fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>TACACS+ log on screen example. Keep in mind that it can look like anything. </p>

        <h3>TACACS+ use case</h3>
        <p>Your company has an office in Cedar Rapids, Iowa, and one in Lincoln, Nebraska. You could have TACACS+ set up to log onto the Lincoln office LAN from the comfort of balmy Cedar Rapids. TACACS+ would authentication your identity, provide you with authorization, and also use accounting to track you. This is called AAA. </p>
        <h3>AAA: Authorization, Authentication, Accounting</h3>
        <p>
        Accounting, the last "A" of AAA. Don't forget, AAA is on the CompTIA acronym list. It is also in section 4.1, as the first item. Accounting in this case means a method of tracking you. When you logged on, where from, what files you accessed, what you downloaded, changed, or deleted. This can be handy for tracking down exactly who leaked that classified memo about manufactured shortage of hot dog buns to the press, and promptly fire and sue them. Most people are not even aware that they are usually tracked every second they are on a LAN, or even the internet. Google, FB, Microsoft, and Apple usually hold down the internet surveillance fort, but for local networks it's up to the system admins to keep sensitive documents from leaking. Accounting is one such method, along with DLP (Data Loss Prevention) which we will cover later.
         TACACS+, RADIUS, and Diameter can all provide AAA.</p>
         <h3>TACACS+ and your average user</h3>
         <p>TACACS+, like must other authentication services, run mostly in the background without the user being aware of what service/protocol/app is being used to verify their username and password when they enter it. The extent the user will see is the log on screen. Unless you are system admin, you will not be dealing with setting up and configuring TACACS+. However, for the exam, you will need to know TACACS+ ports and protocols in case you are asked to fill in some configuration fields.</p>

        

        <h3>TACACS+/RADIUS/Diameter vs Kerberos</h3>
        <p>Kerberos assumes you are already connected to a LAN, and that everyone else on the LAN could be hostile. It provides very secure mutual authentication and SSO, allowing users to sign on once and not have provide a username and password again while accessing different servers/resources on that LAN. <br></br>
        TACACS+/RAIDUS/Diameter assume you are not connected to the LAN, and will not let you access anything until you authenticate. Once authenticated, TACACS+/RADIUS/Diameter provide AAA and tracking with accounting while you use the the LAN, while Kerberos does not provide tracking. It does not provide SSO, so you might be asked for your password many times with accessing different resources on the LAN. All TACACS+/RADIUS/Diameter did was let you sign onto the network, and authorize you to use that network, but not necessarily give you access to everything. So TACACS+/RADIUS/Diameter can be used to remotely connect to a LAN over the internet, or log directly onto a LAN. 
        Kerberos is considered the strongest network authentication of the four, by far. The other three can, however, be used for remote network authentication and accounting, which Kerberos can't.
        </p>

        <h3>Wrap up</h3>
        <p>Remember that TACACS+ provides AAA, and is considered more secure than RADIUS, since it encrypts all of the authentication process instead of just the password. Also keep track of the port, TCP 49. And remember that RADIUS uses UDP. Consider RADIUS and Diameter in the same class with TACACS+, since they are all remote AAA protocols. Remember that they do not provide SSO (Single Sign On).</p>
        <Img fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}> </p>


<Link to="/kerberos">Previous: Kerberos</Link> <Link style={{ float: `right`}} to="/radius">Next: RADIUS</Link>
    </Layout>
)


export default Tacacs

export const query = graphql`
  query {
   front: file(relativePath: { eq: "fry2.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "tac1.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front3: file(relativePath: { eq: "42tac.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }


 front4: file(relativePath: { eq: "ipapp.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  

  }
`