import React from 'react';
import Layout from '../components/layout'
import Styles from './memes.module.scss'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const Memes = (props) => (

        <Layout>
            <h1>The Meme Stash</h1>

            <div className={Styles.container}>
                <div ><Img fluid={props.data.front6.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front6.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front2.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front3.childImageSharp.fluid} /></div>
                <div className={Styles.horizontal}><Img fluid={props.data.front4.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front5.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front7.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front8.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front9.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front10.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front12.childImageSharp.fluid} /></div>
                <div className={Styles.horizontal}><Img fluid={props.data.front13.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front14.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front15.childImageSharp.fluid} /></div>
                <div className={Styles.horizontal}><Img fluid={props.data.front16.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front17.childImageSharp.fluid} /></div>
           
                <div className={Styles.horizontal}><Img fluid={props.data.front18.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front19.childImageSharp.fluid} /></div>
                <div className={Styles.vertical}><Img fluid={props.data.front21.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front22.childImageSharp.fluid} /></div>
                <div className={Styles.vertical}><Img fluid={props.data.front23.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front24.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front25.childImageSharp.fluid} /></div>
                <div><Img fluid={props.data.front26.childImageSharp.fluid} /></div>
                </div>
        </Layout>

)


export default Memes

export const query = graphql`
  query {
   front: file(relativePath: { eq: "distractedbw2.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 1000, fit: CONTAIN) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "fry2.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 1000, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front3: file(relativePath: { eq: "neo.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }



  front4: file(relativePath: { eq: "notimee.jpeg" }) {
      childImageSharp {
       
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }



  front5: file(relativePath: { eq: "papwhy.png" }) {
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


  front7: file(relativePath: { eq: "phishing.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }


  front8: file(relativePath: { eq: "please.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }


  front9: file(relativePath: { eq: "risk.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }


front10: file(relativePath: { eq: "secretmode.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  front11: file(relativePath: { eq: "shoulder.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }



front12: file(relativePath: { eq: "strongpassword.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }




front13: file(relativePath: { eq: "time.png" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }



front14: file(relativePath: { eq: "surprise.png" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }





front15: file(relativePath: { eq: "wepmeme2.png" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }




front16: file(relativePath: { eq: "why2.png" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }




front17: file(relativePath: { eq: "wifi.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }



  front18: file(relativePath: { eq: "zoom.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }


  front19: file(relativePath: { eq: "eccmeme.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }


  front20: file(relativePath: { eq: "codetest.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  front21: file(relativePath: { eq: "bigdeal.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }



  front22: file(relativePath: { eq: "found.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }



front23: file(relativePath: { eq: "desmeme.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  front24: file(relativePath: { eq: "applememe.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  front25: file(relativePath: { eq: "memeproxy.png" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }


  front26: file(relativePath: { eq: "msha.jpeg" }) {
    childImageSharp {
     
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }













  }
`
