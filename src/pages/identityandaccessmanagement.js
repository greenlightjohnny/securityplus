import React from "react"
import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Idman = props => (
    
    <Layout>
        <h1>4.0 Identity and Access Management</h1>

        <div>
            <h3>Basically Authentication and Authorization</h3>
            <p>Dunno why everything has to have special names and sound all complicated, but sometimes it do be like that.</p>
            <div>
            <Img fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Remember to make sure you are looking at the current exam objectives, they change every few years. This one is Security+ SY0-501, from April 2020. Search for the current objectives or fill out a form on the CompTIA website so they can email you a copy of them and spam you with emails to buy courses from them. Seriously, they don't have them available for download. Who does that? </p>
            </div>
            <p style={{ marginBottom: 0}}>Section 4.0 accounts for 16% of the exam questions and has four sub-sections:</p>
            <div className={Styles.line}>
            <ul>
                <li className={Styles.isee}>4.1 Compare and contrast identity and access management concepts</li>
                <li className={Styles.isee}>4.2 Given a scenario, install and configure identity and access services.</li>
                <li className={Styles.isee}>4.3 Given a scenario, implement identity and access management controls.</li>
                <li className={Styles.isee}>4.4 Given a scenario, differentiate common account management practices.</li>
            </ul>
            </div>
            <p>
            We are going to break them down into four separate sections/pages on this site, keep in mind they are all kind of interlinked not only with other 4.0 objectives, but with completely different objectives such as 3.0. So you might see a reference to a section you have not yet read. Don't worry about it, you will read everything eventually. Hopefully more than once!
            </p>
        </div>

        <div>
            <h4>4.2, come at me bro, I'm ready for you!</h4>
            <h4>4.3, you have met your match</h4>
            <h4>4.1, I scoff in your face</h4>
            <h4>4.4, you can never defeat me</h4>
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