import React from "react"
import Info from "../components/info"
import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Main from '../components/mainstyle.module.scss'

import Move from '../components/move'
const Crypt = props => (
    
    <Layout>
      <Info title="Cryptography and PKI" description="Landing page for the CompTIA security+ 501 6.0 section. Lots of fun stuff."/>
        <h1>6.0 Cryptography and PKI</h1>

        <div>
            <h3>Super secret codes</h3>
            <p>And here we are, the real meat of security. Transmitting and storing information in a secure manner.</p>

            <div className={Main.fademefam}>
          <div className={Main.flexc}>
          <div>
            <h4>6.1 Explain cryptography algorithms and their basic characteristics</h4>
            <ul>
                <li className={Styles.isee}> <Move to="/6group1">Symmetric algorithms</Move></li>

                <li className={Styles.isee}><Move to="/6group1">Asymmetric algorithms</Move></li>

                <li className={Styles.isee}><Move to="/6group1">Hashing</Move></li>
                <li className={Styles.isee}><Move to="/6group1">Salt, IV, nonce</Move></li>
                
            </ul>
            </div>

          </div>
          <div className={Main.flexc}>
            <div>
            <h4>6.2 Explain cryptography algorithms and their basic characteristics</h4>
            <ul>
                <li className={Styles.isee}> <Move to="/symmetric">Symmetric algorithms</Move></li>

                <li className={Styles.isee}><Move to="/ciphermodes">Cipher Modes</Move></li>
                <li className={Styles.isee}><Move to="/asymmetric">Asymmetric algorithms</Move></li>
                <li className={Styles.isee}><Move to="/hashing">Hashing algorithms</Move></li>
                <li className={Styles.isee}><Move to="/stretching">Key stretching algorithms</Move></li>
                <li className={Styles.isee}><Move to="/obfuscation">Obfuscation</Move></li>

                
            </ul>
            </div>
          </div>
          <div className={Main.flexc}>
              <div>
            <h4>6.3 Given a scenario, install and configure wireless security settings</h4>
            <ul>
                <li className={Styles.isee}> <Move to="/cryptoprotocols">Cryptographic Protocols</Move></li>

                <li className={Styles.isee}><h4>Authentication Protocols:</h4></li>

                <li className={Styles.isee}><Move to="/eap">EAP</Move></li>

                <li className={Styles.isee}><Move to="/802">802.1x </Move></li>

                <li className={Styles.isee}><Move to="/radiusfederation">Radius Federation</Move></li>

                <li className={Styles.isee}><Move to="/wirelessmethods">Methods</Move></li>
                

                
            </ul>
            </div>
          </div>
          
          <div className={Main.flexc}>
            <h4>6.4 Given a scenario, implement public key infrastructure.</h4>
          </div>
          

      </div>
            <div>
              <h3>Section 4.0 breakdown</h3>
            <Img fluid={props.data.front.childImageSharp.fluid} />
            <Img fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Remember to make sure you are looking at the current exam objectives, they change every few years. This one is Security+ SY0-501, from April 2020. Search for the current objectives or fill out a form on the CompTIA website so they can email you a copy of them and spam you with emails to buy courses from them. Seriously, they don't have them available for download. Who does that? </p>
            </div>
            
            
            
        </div>

        
    </Layout>


)

export const query = graphql`
  query {
   front: file(relativePath: { eq: "6one.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "6two.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  

  }
`
export default Crypt