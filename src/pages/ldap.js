import React from "react"
import Info from "../components/info"
import Layout from "../components/layout"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Ldap = props => (
    <Layout>
      <Info title="LDAP: Lightweight Directory Access Protocol" description="Here we learn about the incredibly common LDAP and how it is used to query databases for fun and profit." />
        <h1>LDAP: Lightweight Directory Access Protocol</h1>
        <i>"LDAP, the Lightweight Directory Access Protocol, is a mature, flexible, and well supported standards-based mechanism for interacting with directory servers. It’s often used for authentication and storing information about users, groups, and applications, but an LDAP directory server is a fairly general-purpose data store and can be used in a wide variety of applications." -Neil Wilson https://ldap.com/ </i>
        <div>
            <h3>So what exactly is it?</h3>
            <p>LDAP is part of the TCP/IP suite at the application level, used as a standard language for sending queries to directories. A directory is like a structured file, such as a list of names and their corresponding addresses. Maybe the company payroll off keeps one for sending out text forms, a directory on a server that multiple accounting employees in the office can access. Easier than keeping an excel spreadsheet on one computer, that is for sure. LDAP is the protocol they would likely use to access that directory, as well as send queries to update or remove items. </p>

<div>
            <Img fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>LDAP is part of the TCP/IP suite, so any system can use it.</p>
            </div>
            <h3>Common use cases</h3>
            <p>Probably the most common use for LDAP is for authenticating usernames and passwords during a log on. Often other applications/programs/software will store these in a directory, and send an LDAP query to the directory when someone attempts to log on, checking the username and password entered to see if they match. Microsoft Active Directory (MS AD) uses LDAP. Unix/Linux systems can also use LDAP with realms</p>
            <h3>What does LDAP provide? </h3>
            <p>Authentication, which provides access to directories, and information retrieval/manipulation/management of them, along with SSO (Single Sign On). SSO is when you log on once to a network and are not asked again for your credentials (username password) when you attempt to access another resource on that network. SSO is really nice in an office setting on your local LAN, imagine working in payroll and switching between a directory of employee salaries and employee yearly bonuses, and having to type in your super long secure password yet again.  </p>

            <h3>Security, ports, configure</h3>
            <p>LDAP provides authentication with a username and password, but by default sends these over your network in cleartext over TCP port 389. This is not cool, since anyone on your network with a packet sniffer could intercept and read your username and password. So to solve this, LDAPS was created. Remember, you might be asked to install and configure LDAP and what ports to use, or more likely, not use.</p>
            </div>
            <h3>LDAPS: Lightweight Directory Access Protocol over SSL </h3>
            <p> LDAPS uses TCP port 636 with SSL (Secure Sockets Layer). Remember the ports, and which LDAP protocol (LDAPS) is secure. This is a good test question, about setting up a secure directory for usernames and passwords. You are given five answers, and all of them have different port numbers and protocols.</p>

            <h3>In real life</h3> 
            <p>LDAP is something systems admins set up, not usually something a user configures. You have probably already used LDAP without knowing it. It runs behind the scenes for many different pieces of software. Below are some examples of LDAP authentication screens I stole off the internet. You are more likely to see LDAP on log on screens (which can look like anything) on your local LAN. LDAP might also be used by another program to check your username and password when you log onto a website. LDAP is not something the vast majority of people who take the Security+ will ever setup or even be aware they are using it. LDAP is often used through an application/program that gives it a very pretty interface, you could literally work with LDAP for years and never know it was running in the background.</p>

<div>
            <Img fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Example log on screen. Note that it can look like anything, it does not have say LDAP.</p>
            </div>
            <div>
            <Img fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Another example with no indication of what service is running in the background.</p>
            </div>

            <div>
            <Img fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>An LDAP configuration setup screen, you might have to fill something like this out on the test. That's why you need to memorize the port numbers and protocols.</p>
            </div>

            <h3>Final thoughts</h3>
            <p>The trick is in the name Directory Access Protocol. That is the main purpose of LDAP, and it provides authentication to access directories along with methods to retrieve, modify, and delete directory entries. It is not secure by default on TCP port 389, but is when using TCP port 636 (LDAPS, which uses SSL). It CAN be used for SSO (along with Kerberos, SAML, OpenID Connect, and Shibboleth). LDAP is common to interact with (without knowing it often) on company LANs via a log on screen. LDAP is also used frequently as the back end (side the user does not see) of other applications/programs to retrieve and check usernames and passwords from.</p>


            <h3>Wrap up</h3>
            <p>LDAP falls into the identity and access family (authentication and/or authorization). It can be used for authentication (username password) and SSO (Single Sign On), but it's specialty is communicating with directory servers/files using LDAP queries.
            </p>
            <Img fluid={props.data.front5.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>.</p>
            <Link to="/identityandaccessmanagement">Previous: 4.0</Link> <Link style={{ float: `right`}} to="/ntlm">Next: NTLM</Link>
    </Layout>
)

export const query = graphql`
  query {
   front: file(relativePath: { eq: "ldap2.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "ldap3.jpeg" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front3: file(relativePath: { eq: "ldapconfig.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }


 front4: file(relativePath: { eq: "ipapp.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
      front5: file(relativePath: { eq: "42ldap.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }

  }
`

export default Ldap
