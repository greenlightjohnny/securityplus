import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Openidconnect = props => (
    <Layout>
        <h1>OpenID Connect</h1>
        <p>OpenID Connect is a SSO, and is extremely common to see online. It can be used for both identity (authentication) and access (authorization). OpenID Connect was build on top of OAuth, which we will learn about as well. OAuth provided access (authorization) only. OpenID Connect added on authentication. </p>

        <div>
            <h3>OpenID Connect</h3>
            <Img fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>A typical log on screen for a website that allows you to use an OpenID Connect provider to sign on instead of creating a totally new account.</p>
            </div>



            <h3>OpenID Connect use case</h3>
            <p>Imagine you wanna buy a nice hand made wool hat. You head on over to www.etsy.com, a large independent craft website. You find an awesome hat, and decide to buy it. When you click the checkout button you are prompted to either create a new account, or sign on using your Google, Facebook, or Apple account. OpenID Connect can also be used to share data between apps/programs/software. For example, allowing a shopping app to access your PayPal account details, that is authorization. </p>

            <div>
            
            <Img fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Instead of creating a new account for Etsy, you can use your Google, Facebook, or Apple account. This is SSO, and saves the user the time it takes to register a new account. It also can be considered more secure, since the user now does not have to create and memorize a new password. </p>
            </div>
            <p>If you click one of the "Continue with" buttons you will be redirected, usually a pop up window, to that source. These are idPs (identity service Providers). For example if you picked Google, you would either be asked to log onto your Google account if you were signed out, or redirected back to the original Etsy paged and logged in. Now you have authenticated yourself to Etsy via Google, and can also authorize Etsy to access some of your Google account information. You might get a pop up saying Etsy wanted your permission to access your address, which you could allow Google to share to save you the time of filling it out.</p>
            <h3>SSO and OpenID Connect advantages</h3>
            <p>Why would a website allow people to use Openidconnect instead of creating an account? Because the website gets more business/traffic/comments using an SSO. People are lazy, no one wants to fill out yet another registration form, come up with a username that is not taken, a new password (let's be real here folks, they don't. They just reuse the same one they use for everything else), fill out your email, get the conformation registration email and finalize it all. <br></br>
            <Img fluid={props.data.front4.childImageSharp.fluid} />
            It is so much easier to just click the "Continue with Google" button and let Google handle your authentication and authorization in the background. Etsy never gets your password, there is nothing to steal if Etsy is compromised by hackers and all passwords stolen. Google, the idP, never shares your password with Etsy, the SP (Service Provider). All Etsy does is say "well I trust Apple, Facebook, and Google to tell me who is legit. I'll let them handle user authentication and authorization if the user wants". So the idP provides a server just for authenticating clients, for free! How nice of Google, Apple, Microsoft, Amazon, Twitter, and more.

            <h3>Wow, so noble of the tech giants to help!</h3>
            <Img fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>At least Facebook would never stoop to such levels, right guys? Right? Guys???? </p>
            </p>

            <h3>Review </h3>
            <p>So OpenID Connect has large idPs, who let you use SSO to authenticate on websites which accept that OpenID Connect providers, so you don't have to create an account. You can prove your identity with authentication, and allow access so your OpenID Connect idP can share some information from that account with the SP. All without creating a new account. It is used mostly on websites, accessed by browsers. SAML is also an SSO, but the SP and idP in SAML generally have a much closer relationship. OpenID Connect allows pretty much any website to use public idPs (Google, Microsoft, Apple, Twitter, Facebook, Amazon) to use their account on any website that offers OpenID Connect for them. OpenID Connect also is much "lighter" weight than SAML, so it performs better on mobile devices.</p>

        <Link to="/oauth">Previous: oauth</Link> <Link style={{ float: `right`}} to="/radius">Next: RADIUS</Link>
    </Layout>
    
    
)

export default Openidconnect
export const query = graphql`
  query {
   front: file(relativePath: { eq: "openid2.jpeg" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "etsy.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "surprise.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front4: file(relativePath: { eq: "time.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  

  }
`