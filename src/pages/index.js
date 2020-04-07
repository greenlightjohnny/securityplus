import React from "react"
import Layout from '../components/layout'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Main from '../components/mainstyle.module.css'
export default ({ data }) => (
  <Layout>
    <h1>GRIND Securtity+</h1>
    <p>
      Random bits of studying for the CompTIA Security+ exam. 
      The Security+ certification is a requirment for a ton of US Government jobs, espicially those in IT. How did this happen? Well basically CompTIA spent a ton of money lobbying the government (this is legal bribery) to make the Security+ exam fullfill a bunch of requirments, which the CompTIA totally had no influence over creating. 
      </p>

      <div>
        <h3>Exam catogery breakdown</h3>
      <Img fluid={data.file.childImageSharp.fluid} />
      <p>These can be learned in any order. In fact, they are all kind if intertwined so you will be anyway.</p>
      </div>
      <div>
        <h3>Exam catogery breakdown</h3>
      <Img fluid={data.file.childImageSharp.fluid} />
      <p>These can be learned in any order. In fact, they are all kind if intertwined so you will be anyway.</p>
      </div>
      
      <div className={Main.rant}>
        <h3>Rant: Not relavent exam study, literally just a rant</h3>
      <p>
      I'm pretty offended by the whole Security+, because this exam is supposed to help defend US National Security and I think it does a poor job of that. The exam should honestly be split into two separate exams. One for your average employee, who might work around sensistive documents, and another for those administering sensistive IT networks. Most government employees have no part in setting up secure networks, and so probably do not need to memorize what protocol and port Kerberos works on. Heck, they probably don't really even need to know Kerberos exists! It's not like they will be installing and configuring it, the extent of their interaction with Kerberos will be entering their username and password. They won't ever be reviewing firewall logs, so why memorize port numbers? Instead the exam should focus on real world training that they will use. Social engineering awarness, strong passwords, malware, phishing, encryping files, Wi-Fi security, mobile devices, corporate espinionage, and more. These are things they will encounter, or should be using/doing, even if they are currently not aware. This should be the focus for your regular employee, not wasting their time memorizing SMTP vs POP3 ports. News flash: They won't be setting that stuff up, ever, the network administrator does that. Focus on actual real world things!


    </p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "objectives2.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
