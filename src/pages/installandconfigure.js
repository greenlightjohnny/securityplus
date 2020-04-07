import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Idtwo = props => (

    <Layout>
        <h1>4.2 Given a scenario, install and configure identity and access services.</h1>
        <div>
            <Img fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Do you enjoy learning about outdated protocols that you likely will never see and have zero control over if you do? If so, read on! Seriously, you just have to power through these. Unless you are in IT as a systems admin, most of them are not relevant to you. The exam does test you on them, so you had better pretend like you are.</p>
            </div>
      <div>
          <h3>Order! Everyone sit down!</h3>
          <p> There is not really a good order to put all these, lots of them can be use for the same thing, some overlap only parts, and others are totally separate. <br></br>Might as well just go over them in the order on the list. <br></br>
          The key part is that they are all "identity" and/or "access" services (and by services they mean an application/program software). So ever single item on this list can be used for either authentication ("identity), authorization ("access") or both. In addition, some can do more. <br></br>
          <br></br>
          Think of them as programs you would use to access other files, by putting in your username and password. You have already used a ton of these, but the average user really does not notice. If you get a pop up window while trying to open a folder asking for your username and password, do you know what the name of the software asking for it its? Nope, me neither. Well, after this you will my fine friends. <br></br> <br></br>
          At  the very end I'll include some diagrams grouping them together depending on their capabilities. For example, a chart with all the services that can be used for SSS (Single Service Sign On), another chart for AAA (Authentication, Authorization, Accounting). Don't worry about those terms, they are on the test and you will know them by the time you are done with this.  </p>
      </div>

      <div className={Styles.line}>
          <h4>4.2, install and configure</h4>
            <ul>
                <li className={Styles.isee}> <Link to="/ldap">LDAP: Lightweight Directory Access Protocol</Link></li>

                <li className={Styles.isee}><Link to="/">Kerberos, Three headed guard dog</Link></li>

                <li className={Styles.isee}><Link to="/">TACACS+: Terminal Access Controller Access Control Plus</Link></li>

                <li className={Styles.isee}><Link to="/">PAP: Password Authentication Protocol</Link></li>

                <li className={Styles.isee}><Link to="/">CHAP: Challenge Handshake Authentication Protocol</Link></li>

                <li className={Styles.isee}><Link to="/">MSCHAP: Microsoft Challenge Handshake Authentication Protocol</Link></li>

                <li className={Styles.isee}><Link to="/">RADIUS: Remote Authentication Dail-In User Service</Link></li>

                <li className={Styles.isee}><Link to="/">SAML: Security Assertion Markup Language</Link></li>

                <li className={Styles.isee}><Link to="/">OpenID Connect</Link></li>

                <li className={Styles.isee}><Link to="/">OAuth: Open AuthorizationLink></Link></li>

                <li className={Styles.isee}><Link to="/">Shibboleth: Authentication</Link></li>
                <li className={Styles.isee}><Link to="/">Secure Token</Link></li>
                <li className={Styles.isee}><Link to="/">NTLM: New Technology LAN Manager</Link></li>
            </ul>
            </div>


        
    </Layout>
)

export const query = graphql`
  query {
   front: file(relativePath: { eq: "42.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "details.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  

  }
`

export default Idtwo;