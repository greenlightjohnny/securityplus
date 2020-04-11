import React from "react"
import Layout from '../components/layout'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Styles from "./id.module.css"
import { Link } from "gatsby"
import Main from '../components/mainstyle.module.scss'
const Index = props => (
  <Layout>
    <h1>GRIND Guide to The CompTIA Security+</h1>
    

      <div className={Main.fademefam}>
          <div className={Main.flexc}>
            <h4>Section 1.0</h4>
          </div>
          <div className={Main.flexc}>
            <h4>Section 2.0</h4>
          </div>
          <div className={Main.flexc}>
            <h4>Section 3.0</h4>
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
        <h3>CompTIA Security+ test details:</h3>
      <Img fluid={props.data.front2.childImageSharp.fluid} />
      <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Fun fact, you don't know how the questions are weighted. Some questions might be worth more.</p>
      </div>

    
      
      <div>
        <h3>Exam catogery breakdown:</h3>
      <Img fluid={props.data.front.childImageSharp.fluid} />
      <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>These can be learned in any order. In fact, they are all kind of intertwined so you will be anyway. This site starts with section 4.0</p>
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
