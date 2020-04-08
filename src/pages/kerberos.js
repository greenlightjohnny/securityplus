import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Kerberos = props => (
    <Layout>
        <h1>Kerberos: Badass network authentication over an un-secure network</h1>
        <p>Boy oh boy have the folks in the backroom at MIT cooked up an amazing network authentication protocol! And they were even kind enough not to give it a stupid acronym for a name, thanks fam. It's named after a three headed guard dog from Greek mythology. Just how awesome is Kerberos? Well Microsoft now recommends using Kerberos over their own NTLM (New Technology LAN Manager) proprietary network authentication application/program. You know something is on fire when Microsoft dumps their own software in favor of an open source program, because you know Microsoft just hates giving up control.</p>
        <div>
            <h3>Yow! Kerberos is hotttttt</h3>
            <Img fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>What do you think is more secure network authentication protocol? A freaking three headed guard dog, LDAP (Lightweight Directory Access Protocol), or NTLM (New Technology LAN Manager? </p>
            </div>

        <h3>Purpose</h3>
        <i>"Kerberos is a network authentication protocol. It is designed to provide strong authentication for client/server applications by using secret-key cryptography. <br></br> -https://web.mit.edu/Kerberos/</i>
        <p>Kerberos appears to have been designed with logging onto your LAN from within, instead of logging onto a remote computer elsewhere on the internet</p>
        <i> "Unfortunately, firewalls assume that "the bad guys" are on the outside, which is often a very bad assumption. Most of the really damaging incidents of computer crime are carried out by insiders. Firewalls also have a significant disadvantage in that they restrict how your users can use the Internet. (After all, firewalls are simply a less extreme example of the dictum that there is nothing more secure than a computer which is not connected to the network"  -https://web.mit.edu/Kerberos/ </i>
        <p>This is basically a nice way of saying MIT students were hacking the daylights out of the MIT LAN from within and they needed a way to stop them.</p>

        <h3>What does Kerberos provide?</h3>
        <p> Authentication, authentication over an insecure network, mutual authentication (client/server), and SSO (Single Sign On)</p>

        <h3>What is mutual client-server authentication?</h3>
        <p>Both the client and server prove to each other exactly who they are, so they both know the relationship is real it's not just one of them pretending to be into it. we've all been there, still hurts. In the case of LDAP, the server authenticates the client by checking the client's username and password. But what about the LDAP server, how does it prove to the client who it is? Answer: It does not, because it is not mutual authentication. The client (that's you boyo) just takes a blind leap of faith that someone did not set up a fake LDAP server on the LAN and redirect all traffic to it. This can lead to a few rare attacks from within the network, a fake LDAP server setup for example, stealing usernames and passwords when users connect to it instead of the real server. Kerberos steps things up about 50 notches and makes everyone involved authenticate themselves to each other, so all parties involved know exactly who they are talking to. </p>

        <h3>Get ready, it's about to get dangerous</h3>
        <p>Kerberos has three main parties: The client (user/device that is trying to join the LAN), a KDC (Key Distribution Center), and the file server (this is the resource on the LAN that you are trying to access). That's where the three headed dog came from. There are not just two parties involved authenticating each other, there are THREE. <br></br>
        Anyone who has ever been involved in a three way relationship can tell you how fast things get extremely complicated, and Kerberos is no different. Don't expect to understand it right off the bat, you are probably going to have to watch some videos and read more. It's normal.
        </p>

        <h3>Shared secret keys, three sets of magic</h3>
        

        <h3>KDC: Key Distribution Center </h3>
        <p>The KDC is actually two parts, an Authentication Server (AS) and a Ticket-Granting-Server (TGS)The client/user and Kerberos set up a super duper secret shared symmetric encryption key, this happens during the initial registration. For example, when a company hires a new employee and the network admin sets up the users account for Keberos use. <br></br>
        Now remember, a symmetric encryption key uses the same cryptography algorithm to encrypt and decrypt. The Kerberos KDCs Authentication Server (AS) and the client share a secret key, this secret is actually the client's password. Let use call our client/user Scotty Bob. <br></br>
        Scotty Bob rolls into the office half a day late as usual and plops down at his desk ready to kick butt and take names. No one dares say a word about him being late, because the economy is booming and Scotty Bob knows his craft extremely well, management is scared to lose him. Scotty Bob sometimes stays up until dawn playing EVE online. <br></br>
        Our hero Scotty Bob fires up his trusty desktop computer (Running Linux, obviously. Scotty is no plebe) and decides to log onto a local file server connected to the company LAN to see if the new hires actually got anything done, even though he already knows the answer in his heart (that's a big fat "nope"). Scotty Bob is greeted with an authentication screen when he tries to access the file server asking for his username and password, Scotty Bob enters them and and takes a sip of his Code Red Mountain Dew while Kerberos works magic in the background. <br></br>
        The first awesome thing Kerberos does, or rather something it does not do, is send Scotty Bob's (the clients) password to the Authentication Server (AS). So how does the AS actually do what it is supposed to and authenticate that the request to access the file server actually came from Scotty Bob? Kerberos uses a symmetric encryption algorithm, with Scotty Bob's password as the algorithm's key, on the entire request. The request basically says "Hello AS, this is Scotty Bob, just wanting to check on that one file server, let me in". The entire request is encrypted. Scotty Bob's password is not sent. <br></br>
        The Authentication Server (AS) receives the request from the client, Scotty Bob, and looks ups Scotty Bob's username (could be in a directory and using LDAP here folks, just saying). The AS finds Scotty Bob's username and pulls out Scotty Bob's secret key, which is the same password Scotty Bob encrypted his request with. The AS server tries to use Scotty Bob's secret key to decrypt his request. If the secret key unlocks the request, the AS server knows the request came from Scotty Bob, because only Scotty Bob's password (the secret key) can decrypt something that was encrypted with it.
        <h3>Pause, we need to talk</h3>
        <p>Hiya, just checking in to mention that we are talking about 4.2 and Kerberos, but at the same time we are now also covering 6.0 Cryptography! So this is not just one thing, it is a TON. Let's not mention we are hitting a ton of acronyms (AS, TGT, SSO, LDAP) and terms (client-server, mutual authentication, symmetric encryption) which are all on the exam objectives. You are making great progress, and Kerberos is the most complicated Authentication Protocol in my opinion. The most badass as well, you should probably learn it out of sheer respect.  </p>


        </p>

    </Layout>
)

export const query = graphql`
  query {
   front: file(relativePath: { eq: "kerbros.jpeg" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "ldap3.jpeg" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front3: file(relativePath: { eq: "ldapconfig.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }


 front4: file(relativePath: { eq: "ipapp.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  

  }
`

export default Kerberos