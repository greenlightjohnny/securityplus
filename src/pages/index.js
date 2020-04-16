import React, { Fragment } from "react"
import Info from "../components/info"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Pandasvg from '../images/panda.svg'
import Header from '../components/header'
import Footer from '../components/footer'
import Move from "../components/move"

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
            <h4><Move to="/identityandaccessmanagement">4.0 Identity and Access Management</Move></h4>
          </div>
          <div className={Main.flexc}>
            <h4>Section 5.0</h4>
          </div>
          <div className={Main.flexc}>
          <h4><Move to="/cryptography">6.0 Cryptography and PKI</Move></h4>
          </div>

      </div>
      

      <div className={Main.miniflex}>
      <div>
        <Img fluid={props.data.front4.childImageSharp.fluid} />
        </div>

        <div>
          <h3>So. It has come to this</h3>
          <p>Quarantined at home with a large stockpile of Swiss Cake rolls and nothing to do but study for the CompTIA Security+ exam. And by study I mean practice my Gatsby and React skills while making memes about it. You have been warned. </p>
        </div>
       
       
      </div>


 <div className={Main.miniflex}>
      
        <div>
          <h3>Irrelevant</h3>
          <p>Lots of information on the test is not relevant to the vast majority of people forced to take it as a job requirement. There is a big difference between working around sensitive documents and configuring an 802.1x remote RADIUS authentication server for your WPA2 Enterprise WiFi.  </p>
          <h3>Less Security</h3>
          <p>By making the average test taker waste time memorizing protocol port numbers, the CompTIA takes away time that could be spent learning relevant concepts.</p>
        </div>


       <div>
        <Img fluid={props.data.front5.childImageSharp.fluid} />
        </div>

       
      </div>




      <div className={Main.miniflex}>


       <div>
      <Img fluid={props.data.front6.childImageSharp.fluid} />
      </div>

      <div>
        <h3>Just for fun!</h3>
        <p>This site is just me in quarantine studying for the Security+ exam and making memes about it. I am also using this as a chance to practice my Gatsby and React skills, clearly my meme game is already top notch. Don't take this seriously, except for the meme quality.</p>
       
      </div>


    
     
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



  front4: file(relativePath: { eq: "distractedbw2.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }



  front5: file(relativePath: { eq: "highprice.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }



  front6: file(relativePath: { eq: "studyor.png" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  

  }
`
