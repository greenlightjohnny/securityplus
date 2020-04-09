import React from "react"
import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Main from '../components/mainstyle.module.scss'
import { Link } from "gatsby"

const Idman = props => (
    
    <Layout>
        <h1>4.0 Identity and Access Management</h1>

        <div>
            <h3>Basically Authentication and Authorization</h3>
            <p>Dunno why everything has to have special names and sound all complicated, but sometimes it do be like that. This part of the exam is 16% of the total questions.</p>

            <div className={Main.fademefam}>
          <div className={Main.flexc}>
            <h4>4.1 Compare and contrast identity and access management concepts</h4>
          </div>
          <div className={Main.flexc}>
            <div>
            <h4>4.2 Given a scenario, install and configure identity access services</h4>
            <ul>
                <li className={Styles.isee}> <Link to="/ldap">LDAP</Link></li>

                <li className={Styles.isee}><Link to="/kerberos">Kerberos</Link></li>

                <li className={Styles.isee}><Link to="/">TACACS+</Link></li>

                <li className={Styles.isee}><Link to="/identityandaccessmanagement">4.0 </Link></li>

                <li className={Styles.isee}><Link to="/">CHAP</Link></li>

                <li className={Styles.isee}><Link to="/">MSCHAP</Link></li>

                <li className={Styles.isee}><Link to="/">RADIUS</Link></li>

                <li className={Styles.isee}><Link to="/">SAML</Link></li>

                <li className={Styles.isee}><Link to="/">OpenID Connect</Link></li>

                <li className={Styles.isee}><Link to="/">OAuth></Link></li>

                <li className={Styles.isee}><Link to="/">Shibboleth</Link></li>
                <li className={Styles.isee}><Link to="/">Secure Token</Link></li>
                <li className={Styles.isee}><Link to="/">NTLM</Link></li>
            </ul>
            </div>
          </div>
          <div className={Main.flexc}>
            <h4>4.3 given a scenario, implement identity and access management controls</h4>
          </div>
          <div className={Main.flexc}>
            <h4><Link to="/identityandaccessmanagement">4.0 Identity and Access Management</Link></h4>
          </div>
          <div className={Main.flexc}>
            <h4>Section 5.0</h4>
          </div>
          <div className={Main.flexc}>
            <h4>Section 6.0</h4>
          </div>

      </div>
            <div>
              <h3>Section 4.0 breakdown</h3>
            <Img fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Remember to make sure you are looking at the current exam objectives, they change every few years. This one is Security+ SY0-501, from April 2020. Search for the current objectives or fill out a form on the CompTIA website so they can email you a copy of them and spam you with emails to buy courses from them. Seriously, they don't have them available for download. Who does that? </p>
            </div>
            
            
            
        </div>

        
    </Layout>


)

export const query = graphql`
  query {
   front: file(relativePath: { eq: "identity.png" }) {
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
export default Idman