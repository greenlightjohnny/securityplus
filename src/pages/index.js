import React from "react"
import Layout from '../components/layout'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Styles from "./id.module.css"
import { Link } from "gatsby"
import Main from '../components/mainstyle.module.css'
const Index = props => (
  <Layout>
    <h1>GRIND Guide to The CompTIA Security+</h1>
    <p>
      
      The Sec+ certification is a requirement for a ton of US Government jobs, especially those in IT. How did this happen? Well basically CompTIA spent a ton of money lobbying the government (this is legal bribery) to make the Security+ exam fulfill a bunch of government red tape requirements, which the CompTIA totally had no influence over creating whatsoever.
      </p>
      <div className={Styles.line}>
          <h4 style={{ marginTop: 0, paddingLeft: `1rem`}}>Map to GLORY! Onwards!</h4>
            <ul>
                <li className={Styles.isee}> <Link to="/ldap">LDAP: Lightweight Directory Access Protocol</Link></li>

                <li className={Styles.isee}><Link to="/kerberos">Kerberos, Three headed guard dog</Link></li>

                <li className={Styles.isee}><Link to="/">TACACS+: Terminal Access Controller Access Control Plus</Link></li>

                <li className={Styles.isee}><Link to="/identityandaccessmanagement">4.0 Identity and Access Management</Link></li>

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

      <div>
        <h3>CompTIA Security+ test details:</h3>
      <Img fluid={props.data.front2.childImageSharp.fluid} />
      <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Fun fact, you don't know how the questions are weighted. Some questions might be worth more.</p>
      </div>

    
      
      <div>
        <h3>Exam catogery breakdown:</h3>
      <Img fluid={props.data.front.childImageSharp.fluid} />
      <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>These can be learned in any order. In fact, they are all kind of intertwined so you will be anyway. This site starts with section 4.0</p>
      </div>

      <div>
        <h3>Let's go fam, we got this</h3>
        <p>Print out the official exam guide, 28 pages, and keep it handy while you study. <br></br>
        <a href="https://tinyurl.com/y4cumcgh">CompTIA Security+ Objectives</a><br></br>
        It also helps to keep it open in another browser window, using "control + f" to look things up. <br></br>Don't feel overwhelmed, there is a ton of crossover between the sections. For example, 4.0 covers "Identity and Access Management", but also has bits of 1.0 "Threats, Attacks and Vulnerabilities" along with 2.0 "Technologies and Tools" and of course the crowd favorite 6.0 "Cryptography and PKI". It's all a big spiderweb, everything is connected. At first it won't make much sense, but gradually it will come into focus. Keep your eye on the prize and just know that you can and will get there. <br></br>
        Jump on in, the water is fine! Kicking this off with section 4.0, Identity and Access Management
         </p>
      </div>

      <div>
        <h3>Study habits</h3>
        <p>Do a little bit each day. Everyone says they don't have time. I am not talking about a two hour study session here, I am talking about having some index cards you made on previous days in your pocket and whipping those out for five minutes. Repetition is key, and just reviewing acronyms for 10 minutes a day on your "off" days will be a huge boost come test time. </p>
      </div>
      
      <div className={Main.rant}>
        <h3>Rant: Not relevant exam study, literally just a rant. Skip if you value your time</h3>
      <p>
      I'm pretty offended by the whole Security+, because this exam is supposed to help defend US National Security and defend corporations against all kinds of cyber attacks, and I think it does a poor job of that. </p>
      <h3>It should be two different exams</h3>
      <p>The exam should honestly be split into two separate exams. One for the majority of people, who might work around sensitive documents, and another for those administering sensitive IT networks. The vast majority of employees have no part in setting up secure networks, and so probably do not need to memorize what protocol and port Kerberos works on. Heck, they probably don't really even need to know Kerberos exists! It's not like they will be installing and configuring it, the extent of their interaction with Kerberos will be entering their username and password. They won't ever be reviewing firewall logs, so why memorize port numbers? Instead the exam should focus on real world training that they will use. Social engineering awareness, strong passwords, malware, phishing, encrypting files, Wi-Fi security, mobile devices, corporate espionage, and more. These are things they will encounter, or should be using/doing, even if they are currently not aware. This should be the focus for your regular employee, not wasting their time memorizing SMTP vs POP3 ports. News flash: They won't be setting that stuff up, ever, the network administrator does that. Focus on actual real world things!
      </p>
      <h3>It hurts security</h3>
      <p>A common argument seems to be "well it might be excessive information, but it can't hurt to know!" Actually, yes it can. Instead of adding additional relevant information to the Security+ test which could actually help make things more secure, time is wasted learning about what version of SNMP is most secure. Guess what? Literally over 99% of the people who take this exam will ever set up SNMP. The exam is filled with things like this that are only relevant to system administrators, which should be split off into a separate exam. Why should 99% of test takers be forced to memorize irrelevant things, instead of removing it and adding material that actually matters in the real world? </p>
    </div>
  </Layout>
)
export default Index

export const query = graphql`
  query {
   front: file(relativePath: { eq: "objectives2.png" }) {
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
