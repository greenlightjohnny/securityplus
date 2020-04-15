import React from "react"
import Info from "../components/info"
import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Saml = props => (
    <Layout>
      <Info title="SAML: Security Assertion Markup Language" description="Yet another authentication protocol, this one mostly for SSO. It is older and slower, mostly used in corporate environments" />
        <h1>SAML:  Security Assertion Markup Language</h1>
        <p>SAML is standard mostly used for SSO on the web, allowing you to use one set of credentials (username and password) to log onto other services/websites. SAML works by exchanging authentication and authorization between three parties known as the identity provider (idP), service provider (SP), and the principal (you/client/device). <br></br>
        SAML is an older XML (Extensible Markup Language) based SSO service, and is considered a "heavy" language, meaning it does not perform well on mobile devices. As a result, OpenID Connect is largely used for consumer level generic web and mobile SSO (think signing into a different site with your Facebook account), while SAML is holding down the custom enterprise/corporate level web based SSO side of the game.
        </p>
        
        <div>
            <h3>SAML example sign on</h3>
            <Img fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>What you might actually see while using a SAML based SSO. Pro tip, most of the you won't even know you are using SAML. In fact you might have already used it. Note the address bar and a "SAMLRequest" in the URL. This would log you onto a different website using credentials from another.</p>
            </div>
          <h3>Real world SAML use</h3>
          <p>Let's pretend you work at a large corporation with 20,000 employees. You have a regular desk with a computer, and you log onto the company LAN each morning with a username and password <br></br>The HR department has just outsourced the employee vacation time scheduling system, they purchased a purpose built Saas (Software as a Service) and set up a brand new website for it. Now employees can visit www.taketimeoffeasilyornot.com, log on, and schedule their time off. The new system is super simple, easier for the employee to understand, and less work for HR. EVERYBODY WINS.<br></br></p>
          <p>Well the only issue with this is the fact that the website requires a username and password to log on, so all of those 20,000 employees are going to have to go through a registration process and create brand new accounts. Of course they will all come up with brand new 12+ character passwords, upper and lowercase letters, numbers, and some special characters. Totally secure, right guys?? Right? Hahaha heck no. Let's be real. They are either going to make that password the EXACT same password they use for their LAN log on, write it down, or make a super simple one. </p><br></br> Wouldn't it be nice if they did not have to create new accounts for the website, and somehow just use their regular work LAN username and password?
          <p>Great news! They can. But how? If the system admins just copied the username/password directory to the web server as the sign on mechanism, that would work until it was time to change passwords. Now the user would have to change both passwords, more work. And now there are TWO separate username password databases out there, one on the LAN, and the other on the web server. If one database gets compromised, both do. And this is just for two services, what if the company had 10 different services/apps/websites? Things get out of hand fast, lemme tell you what.</p>

          <h3>SAML to the rescue!</h3>
          <p>SAML solves all of this by having a central authentication/authorization center which tracks and manages all usernames/passwords and access permissions, the idP (identity Provider). It is all internet based. SAML has three components:</p>
            
            <ul>
              <li>Principal:<br></br> This is the client/employee/user/device which is requesting the service.</li>
              <li>Service Provider (SP): <br></br>In this case, the www.taketimeoffeasilyornot.com website.</li>
              <li>identity Provider (idP):<br></br> The central location managing all authentication and authorization requests from SPs.</li>
              </ul> 

              <p>It is all internet based, so the principal/client can be at their house in pajamas, the SP website can be in a different country, and the idP can be halfway across the world at corporate headquarters.</p>
              <p>
              With SAML set up, when the employee (client) visits the www.taketimeoffeasilyornot.com website and enters in their username and password, they are the "principal" of the three way SAML love triangle. The website is called the SP (Service Provider) because they are trying to access the vacation scheduler service. So the principal/user/client/employee/device enters their username and password into the SP (www.taketimeoffeasilyornot.com), and SAML in the background takes that requests and sends it off to a separate location, the idP, for verification. The idP is one central location that keeps track off all the usernames and passwords for that company.</p>




           

        
        

        <div>
            <h3>SAML authentication and authorization process</h3>
            <Img fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>The SAML process. You really don't have to memorize this whole thing, but keep track of what the idP, SP, and principal are. Not sure why they call it a principal instead of a client like most others. The principal/user agent is you, the person using the browser.</p>
            </div>
     

        <h3>SAML vs the world</h3>
        <p><span className={Styles.bold}>SAML</span> is mostly used for corporate/enterprise level internet based SSO, and provides authentication and authorization. It does not provide accounting, so it is not AAA.<br></br>
        <span className={Styles.bold}>RADIUS/Diameter/TACACS+</span> do provide AAA, but not SSO. You need separate accounts for each service you access using RADIUS/Diameter/TACACS+, there is no central database it checks for SSO. They do not have to be web/browser based and can be used to authenticate onto a LAN or a remote via the internet. <br></br>
        <span className={Styles.bold}>LDAP</span> also provides authentication and authorization, along with SSO, but it is more for use managing/accessing directories. It is not used for web based SSO, typically only on a local LAN. <br></br> <span className={Styles.bold}>Kerberos</span> does provide SSO like SAML, along with authentication and authorization, but they have very different use cases. Kerberos is not used for web based SSO, instead it focuses on SSO for the LAN it is connected to, and provides extremely strong security. You would not use Kerberos to log onto a website, as you would with SAML. <br></br>
        <span className={Styles.bold}>OpenID Connect</span>OpenID Connect is the closet to SAML, and also provides web base SSO with authentication and authorization. OpenID Connect works better than SAML on mobile devices, and is used by consumers to log onto other services with accounts from large OpenID Connect providers, such as Apple, Microsoft, Google, Facebook, and Twitter. 
         </p>

         <h3>Still more...</h3>
         <p>RADIUS/Diameter/TACACS+ are a central server controlling access to ONE other resource, such as a LAN or another server. SAML is a central server controlling access to MANY other resources, such as five different websites with a single set of user credentials. </p>
         <h3>Wrap up</h3>
         <p>If you see SAML, you should be thinking authentication for enterprise/corporate web based SSO. Shibboleth is based on SAML and is pretty much the same. The main competition is OpenID Connect, which is more consumer web based SSO.</p>

       
         <Img fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}></p>
            

        <Link to="/radius">Previous: RADIUS</Link> <Link style={{ float: `right`}} to="/openidconnect">Next: OpenID Connect</Link>
    </Layout>
)
export default Saml

export const query = graphql`
  query {
   front: file(relativePath: { eq: "saml.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "saml3.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "42sam.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }

  

  }
`