import React, { Fragment } from "react"
import Info from "../components/info"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Pandasvg from '../images/panda.svg'
import Header from '../components/header'
import Footer from '../components/footer'

import { Link } from "gatsby"
import Main from '../components/mainstyle.module.scss'
const Panda = () => <><img className={Main.panda} style={{ height: `200px`, marginBottom: `10px`}} src={Pandasvg} /></>
const Index = props => (
  <Fragment>
    <Info title="Shocked Security Koala" />
    <Header />
    <section className={Main.title}>
    <h1 className={Main.topmargin}>CompTIA Security<span style={{ color: `#f11c59`}}>+</span> </h1>
    <h4 className={Main.lowmargin}>Misery. Memes. Mastery.</h4>
    </section>
    <div className={Main.crossline}>
    <div className={Main.pandafloat}>
    <Panda />

    </div>
    </div>
   

    <div className={Main.container}>
    
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
          <h4><Link to="/cryptography">6.0 Cryptography and PKI</Link></h4>
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

      </div>
    <Footer />
  </Fragment>
)
export default Index

export const query = graphql`
  query {
   front: file(relativePath: { eq: "objectives2.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "deets.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front3: file(relativePath: { eq: "details.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  

  }
`
