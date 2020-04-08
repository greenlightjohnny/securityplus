import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Saml = props => (
    <Layout>
        <h1>SAML:  Security Assertion Markup Language</h1>
        <p>SAML is used for exchanging authentication and authorization between two parties known as the identity provider (idP) and service provider (SP), and you (the principal) are in the middle of this exchange. Yes, both those acronyms are on the test, don't ask me why. SAML is a bit different from the whole RADIUS/TACACS+ AAA services. First, it does not provided the final "A", accounting. It does, however, provide SSO (tattoo this on your arm until you know what it stands for). SAML is an XML (Extensible Markup Language) based Language. What is XML and why should I bother? I have no freaking clue, only that XML is listed on the CompTIA acronyms list. XML defines some rules for encoding documents in a format that both computers and humans can read. Perhaps CompTIA might ask you some clever test question about what a good XML based SSO is. Silly stuff, but there it is, keep in mind SAML is XML based.  </p>

        <h3>What is SAML used for?</h3>
        <p>The main use of SAML is SSO, in particular SSO on websites via your browser. I know this is true because Wikipedia actually says this is the primary use case for SAML. Pack it in, case closed! This means a user could log on via their browser (Firefox, if you know what is good for you. Chrome, if you like being spied on) to one website, and gain access to other sites they visit without signing on if they are associated. For example, if you sign onto your gmail account and later visit Youtube, you will notice you are signed into Youtube even though you never entered your username and password. This is web based SSO.</p>

        <h3>More SSO examples</h3>
        <p>Another example of web based SSO is visiting a site and seeing a "log on with your GooseFighterLand.com account" You already have a GooseFighterLand.com account (totally made up btw) so it is super easy for you to enter your GooseFighterLand username and password to gain access to another website. This saves you time, you don't have to create a totally new account just for another website. When you attempt to log on, it will be sent to the idP (identity Provider) via SAML who will authentication and authorize you, and send a token back via SAML which logs you in. This all happens in the background, you don't even know you are using it. <br></br> An advantage of SAML and web based SSO is the website you log onto with via SAML is that website does not have access to your password, they never see it or store it. The less people that have your password the better, my Mother always told me.
        </p>

        <div>
            <h3>SAML</h3>
            <Img fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>The SAML process. You really don't have to memorize this whole thing, but keep track of what the idP, SP, and principal are. Not sure why they call it a principal instead of a client like most others. The principal/user agent is you, the person using the browser.</p>
            </div>
            <h3>SAML process</h3>
            <p> The client, Scotty Bob, is browsing a website about candles making and sees a button that says "Log in with your codereddrinkers.com account!". Scotty Bob wants to post a comment on the candle making forum, so he decides to log on via the SSO method. Apparently codereddrinkers and the candle makers trust each other, and have set SAML up for SSO. Scotty Bob fills out his username and password. Scotty Bob is known as the "principal" in this case. The candle making website is the Service Provider (SP). They provide something Scotty Bob wants to access. The SP gets the request from the principal, Scotty Bob. The candle making website does not know Scotty Bob's codereddrinkers.com account username or password, so it can't verify him. Instead it forwards a request back to Scotty Bob, which Scotty Bob forwards to the identity Provider (idP). The idP is codereddrinkers.com, it is providing the identity for Scotty Bob to use. Codereddrinkers.com com get's the request from Scotty Bob, saying "Hey I wanna log onto this other website using this account, tell them I am real". the idP verifies Scotty Bob, and forwards the info back to Scotty, who sends it on to the SP, which now lets him access the site using his codereddrinkers.com account.</p>

        <h3>SAML vs RADIUS, LDAP, Kerberos</h3>
        <p>Just to keep harping on things, SAML is mostly used for web based SSO with authentication and authorization, and does not provide AAA. <br></br>
         RADIUS does provide AAA, but not SSO. Radius does not have to be browser based, and can be used to authenticate onto a local network or a remote one via the internet. <br></br>
         LDAP also provides authentication and authorization, along with SSO, but it is more for use managing/accessing directories. It is not used for web based SSO, typically only on a local LAN. <br></br> Kerberos does provide SSO like SAML, along with authentication and authorization, but they have very different use cases. Kerberos is not used for web based SSO, instead it focuses on SSO for the LAN it is connected to, and provides extremely strong security. 
         </p>

         <div>
            <h3>SAML</h3>
            <Img fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>What you might actually see while using SAML. Note the address bar and a "SAMLRequest" in the URL. This would log you onto a different website using credentials from another.</p>
            </div>

            <h3>SAML in the wild</h3>
            <p>So, is your average person likely to use SAML? Yes! Have you already likely used it? Yes! Did you know you were using it? Not likely! Will studying what SAML does make things more secure? Nope, but here we are anyway.<br></br> Is there anything you, the user, can do to make SAML more secure. Not really, maybe just use stronger passwords. There is no secret configuration you can use when signing on with it or anything, it is a pretty basic "username and password" format. </p>

            <h3>SAML competition </h3>
            <p>The other big name in web based SSO is OpenID Connect. SAML idPs are typically smaller, while OpenID Connect providers are massive names such as Google, Amazon, Facebook, Twitter. Shibboleth is a SAML based SSO service. OAuth is another, but provides authorization only, not authentication. </p>

        <Link to="/radius">Previous: RADIUS</Link> <Link style={{ float: `right`}} to="/Shibboleth">Next: Shibboleth</Link>
    </Layout>
)
export default Saml

export const query = graphql`
  query {
   front: file(relativePath: { eq: "saml.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "saml3.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "details.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

  

  }
`