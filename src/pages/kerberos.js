import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Kerberos = props => (
    <Layout>
        <h1>Kerberos: Badass network authentication over an un-secure network</h1>
        <p>Boy oh boy have the folks in the backroom at MIT cooked up an amazing network authentication protocol! And they were even kind enough not to give it a stupid acronym for a name, thanks fam. It's named after a three headed guard dog from Greek mythology. Just how awesome is Kerberos? Well Microsoft now recommends using Kerberos over their own NTLM (New Technology LAN Manager) proprietary network authentication protocol. You know something is on fire when Microsoft dumps their own software in favor of an open source program, because Microsoft just hates giving up control.</p>
        <div>
            <h3>Yow! Kerberos is a BEAST</h3>
            <Img fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>What do you think is more secure network authentication protocol? A freaking three headed guard dog, LDAP (Lightweight Directory Access Protocol), or NTLM (New Technology LAN Manager? If you answer this one wrong on the test we can't be friends.</p>
            </div>

        <h3>Purpose</h3>
        <i>"Kerberos is a network authentication protocol. It is designed to provide strong authentication for client/server applications by using secret-key cryptography. <br></br> -https://web.mit.edu/Kerberos/</i>
        <p>Kerberos appears to have been designed with logging onto your LAN from within, instead of logging onto a remote computer elsewhere on the internet.</p>
        <i> "Unfortunately, firewalls assume that "the bad guys" are on the outside, which is often a very bad assumption. Most of the really damaging incidents of computer crime are carried out by insiders. Firewalls also have a significant disadvantage in that they restrict how your users can use the Internet. (After all, firewalls are simply a less extreme example of the dictum that there is nothing more secure than a computer which is not connected to the network"  -https://web.mit.edu/Kerberos/ </i>
        <p>This is basically a nice way of saying MIT students were hacking the daylights out of the MIT LAN from within and they needed a way to stop them.</p>

        <h3>What does Kerberos provide?</h3>
        <p> Authentication, confidentiality (via encryption), integrity (encryption and hashing to prove the request was not altered), authentication over an insecure network, mutual authentication (client/server), and SSO (Single Sign On).</p>
        <h3>English, do you speak it?</h3>
        <p>Kerberos pretends your company network is filled with spies listening in with packet analyzers on all network traffic, and still provides you a way to securely log onto that LAN (authentication) without fear of anyone on the network being able to eavesdrop and steal your authentication (password). Not only does Kerberos verify the client accessing accessing the file server is who they say they are, with Kerberos the client also authenticates the server. Mutual authentication. Kerberos runs on UDP port 88. It all goes on in the background, most people using Kerberos have no clue they are using it. All set up by the network admins, the heros we deserve. </p>

        <h3>What is mutual client-server authentication?</h3>
        <p>Both the client and server prove to each other exactly who they are, so they both know the relationship is real it's not just one of them pretending to be into it. We've all been there, still hurts. In the case of LDAP, the server authenticates the client by checking the client's username and password. But what about the LDAP server, how does it prove to the client who it is? Answer: It does not, because it is not mutual authentication. The client (that's you boyo) just takes a blind leap of faith that someone did not set up a fake LDAP server on the LAN and redirect all traffic to it. This can lead to a few rare attacks from within the network, a fake LDAP server setup for example, stealing usernames and passwords when users connect to it instead of the real server. Kerberos steps things up about 50 notches and makes everyone involved authenticate themselves to each other, so all parties involved know exactly who they are talking to. </p>
        <Img fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>A Kerberos authentication screen. This is all the average user really sees of Kerberos every single day, sign once each day and that is it.</p>
          

        <h3>Get ready, it's about to get messy</h3>
        <p>Kerberos has three main parties: The client (user/device that is trying to join the LAN), a KDC (Key Distribution Center), and the file server (this is the resource on the LAN that you are trying to access). That's where the three headed dog came from. There are not just two parties involved authenticating each other, there are THREE, 'count'em, three parties. <br></br>
        Anyone who has ever been involved in a three way relationship can tell you how fast things get extremely complicated, and Kerberos is no different. Don't expect to understand it right off the bat, you are probably going to have to watch some videos and read more. It's normal.<br>
        </br> The KDC is actually two separate parts, the AS (Authentication Server), and TGS (Ticket-Granting-Server).
        </p>

        <h3>Shared secret keys, three sets of magic</h3>
        <p>In the Keberos authenticate process there are three separate pairs of symmetric private encryption keys. 
            <ul>
                <li>The client (Scotty Bob) and the AS share one pair.</li>
                <li>The AS and the TGS share a separate pair.</li>
                <li>The TGS and the file server share a separate and final pair</li>
            </ul>
            <p>These keys are used with encryption algorithms to send data back and forth between each other, the actual keys (passwords) are never sent during the authentication process. The keys are set up ahead of time, such as when a system admin sets up a new employee with an account and permissions for what they can access. Anyone listening in on the network traffic (such as with a packet analyzer) only sees the encrypted cipher text, which does them absolutely no good. If the passwords were sent encrypted, there is a chance the communication could be intercepted and a brute force attempt made offline. </p>
        </p>
        <Img fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>This is actually a gross simplification of Kerberos, it is seriously much more complicated.</p>

        <h3>KDC: Key Distribution Center </h3>
        <p>The KDC is actually two parts, an Authentication Server (AS) and a Ticket-Granting-Server (TGS). The client/user and Kerberos set up a super duper secret shared symmetric encryption key, this happens during the initial registration. For example, when a company hires a new employee and the network admin sets up the users account for Keberos use. <br></br>
        Now remember, a symmetric encryption key uses the same cryptography algorithm to encrypt and decrypt. The Kerberos KDCs Authentication Server (AS) and the client share a secret key, this secret is actually the client's password. Let use call our client/user Scotty Bob. <p> <br></br><p>
        Scotty Bob rolls into the office half a day late as usual and plops down at his desk ready to kick butt and take names. No one dares say a word about him being late, because the economy is booming and Scotty Bob knows his craft extremely well, management is scared to lose him. Scotty Bob sometimes stays up until dawn playing EVE online. <br></br> </p>
        Our hero Scotty Bob fires up his trusty desktop computer (Running Linux, obviously. Scotty is no plebe) and decides to log onto a local file server connected to the company LAN to see if the new hires actually got anything done, even though he already knows the answer in his heart (that's a big fat "nope"). Scotty Bob is greeted with an authentication screen when he tries to access the file server asking for his username and password, Scotty Bob types them, hits the enter key, and starts to take a sip of his Code Red Mountain Dew while Kerberos works magic in the background. 
        </p>
      <p>
        The first awesome thing Kerberos does, or rather something it does not do, is send Scotty Bob's (the clients) password to the Authentication Server (AS). So how does the AS actually do what it is supposed to and authenticate that the request to access the file server actually came from Scotty Bob? Kerberos uses a symmetric encryption algorithm, with Scotty Bob's password as the algorithm's key, on the entire request. The request basically says "Hello AS, this is Scotty Bob, just wanting to check on that one file server, let me in". The entire request is encrypted. Scotty Bob's password is not sent. <br></br></p>
        The Authentication Server (AS) receives the request from the client, Scotty Bob, and looks ups Scotty Bob's username (could be in a directory and using LDAP here folks, just saying). The AS finds Scotty Bob's username and pulls out Scotty Bob's secret key, which is the same password Scotty Bob encrypted his request with. The AS server tries to use Scotty Bob's secret key to decrypt his request. If the secret key unlocks the request, the AS server knows the request came from Scotty Bob, because only Scotty Bob's password (the secret key) can decrypt something that was encrypted with it.
        <h3>Pause, we need to talk</h3>
        <p>Hiya, just checking in to mention that we are talking about 4.2 and Kerberos, but at the same time we are now also covering 6.0 Cryptography! So this is not just one thing, it is a TON. Let's not mention we are cover a bunch of acronyms (AS, TGT, SSO, LDAP) and terms (client-server, mutual authentication, symmetric encryption, confidentiality) which are all on the exam objectives. You are making great progress, and Kerberos is the most complicated Authentication Protocol in my opinion. The most badass as well, you should probably learn it out of sheer respect.  </p>

        <h3>And now, back to our story</h3>
        <p>The Authentication Server (AS) has just checked out our hero, Scotty Bob, and decided he was legit. Does it grant him access to the file server?? FUDGE no it does not, just how weak do you think Kerberos is???? Kerberos does not trust anyone! So the AS uses a different secret symmetric encryption key, one that Scotty Bob does not have, and uses it to encrypt something called a Ticket-Granting-Ticket (TGT). It sends this "ticket" (TGT, I will call them both throughout, the exam might call it a "ticket" or TGT) back to Scotty Bob. Scotty Bob receives the TGT, and has no freaking clue what it says because the ticket is encrypted with a symmetric secret key that he does not have. Scotty Bob, or rather Scotty Bob's computer, gets the TGT and immediately forwards it to the KDC, this time to the TGS (Ticket Granting Server) This is all in the blink of an eye, Scotty Bob is still on his first sip of Code Red, and has (and will do) done nothing but hit enter after entering his username and password.</p><p> The TGS receives the TGT request from Scotty Bob, and decrypts the requests with the secret key it shares with the Authentication Server (AS). The TGT opens the request up and sees that it contains info on Scotty Bob and his request to access the file server, along with info from the AS saying "Yeah I checked it out, it really is Scotty Bob we are talking with". The TGS encrypts a "token" with yet another shared secret symmetric key (this one only it and the file server share) and sends it back to Scotty Bob. The token also contains some time stamp information, regarding how long it can be used to for.<br></br></p>

        <h3>At long last, Scotty Bob receives his secure access token!</h3>
                <p>Scotty Bob is STILL on his first sip of Code Red, the sweet nectar just now beginning to roll down his throat, when the "token" from the TGS (Better remember what that stands for, it's on CompTIA list) arrives back at his computer. Like a three way game of tennis, Scotty Bob's computer immediately sends the token onto the file server Scotty Bob wants access to. Still encrypted, Scotty Bob can't read it. The file server receives the token and uses the shared symmetric encryption key which it and the TGS set up long ago to decrypt and read what the token says. The token says "Hey, the AS checked out Scotty Bob, and I checked the AS out to make sure they were real, you are checking me out, everything looks on the up and up, how about you give Scotty Bob access for the next 8 hours to this server and any others he has authorization to enter? Cool".</p>

                <h3>A happy ending, SSO and confidentiality</h3>
                <p>Now Scotty Bob, the client, has an access token good for the whole day. If Scotty Bob needed to access a different file server on the LAN, he would not have to go through that whole authenticate process again, the token carries his full credentials, so he can access any other server on the network he has permission to use with the token. All in the background, Scotty Bob is lazy and has no interest in seeing any of the process. This is called SSO, Single Sign On. Better know what SSO stands for. Of course Scotty Bob also does not want anything he sends over the network intercepted, so Kerberos takes care of all that for him and provides confidentiality by encrypting his communication after he is authenticated (and during the authenticate process too).</p>

                <h3>Kerberos vs the world </h3> 
                <p>Of the the options that can be used for LAN based network authentication, Kerberos kicks the poop out of them for security. Kerberos is great for LAN SSO with super strong security. Kerberos does not, however, provide accounting. Remember, Kerberos was not designed to remotely access resources over the internet, it was designed with the LAN in mind. So there are other authentication protocols such as TACACS+, RADIUS, and Diameter that use for remote network authentication.  </p>
                <Img fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>What port and protocol does Kerberos use?????</p>



        </p>
        <Link to="/ldap">Previous: LDAP</Link> <Link style={{ float: `right`}} to="/tacacs">Next: TACACS+</Link>

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

    front2: file(relativePath: { eq: "ksign5.jpeg" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front3: file(relativePath: { eq: "follow.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }


 front4: file(relativePath: { eq: "42ker.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  

  }
`

export default Kerberos