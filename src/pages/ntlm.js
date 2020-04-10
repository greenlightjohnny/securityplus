import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Ntlm = props => (
    <Layout>
        <h1>NTLM: New Technology LAN Manager</h1>
        <p style={{ fontStyle: `italic`}}>"In a Windows network, NT (New Technology) LAN Manager (NTLM) is a suite of Microsoft security protocols intended to provide authentication, integrity, and confidentiality to users."" -<a href="https://en.wikipedia.org/wiki/NT_LAN_Manager">Wikipedia</a> </p>
        <Img fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Example of a possible NTLM authentication pop up. </p>
          
        <p>Please note that Microsoft put an acronym, LAN (Local Area Network), inside the acronym for New Technology LAN Manager (NTLM). There ought to be laws!<br></br>
        On the bright side, LAN is a big tipoff that NTLM is intended for use on LOCAL networks.
        NTLM provides (or tries to):
        <ul>
          <li>Authentication: Through usernames and passwords</li>
          <li>Integrity: Through hashing</li>
          <li>Confidentiality: Through encryption</li>
        </ul>
        </p>
        <Img fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>More NTLM, notice how they look like Microsoft Windows pop ups and not a browser based log on screen? It is for LANs, so this the typical type of screen. </p>

        <h3>NTLMv1, NTLMv2, and NTLM2 Session</h3>
        <p>Oh boy, Microsoft at it again with the naming. We go from NTLMv2 to NTLM2?? Really? No one saw any possibility of confusion there? Cool, cool.<br></br>
        All of them are challenge-response authentication protocol, the user/client initiates contact with the NTLM server. The NTLM server responds by sending "challenge" (CHALLENGE_MESSAGE) to the client/user. The client/user has to send a "response" (AUTHENTICATE_MESSAGE) back proving who they are. Each version of NTLM is a bit different besides those basics.
        </p>
        <Img fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Extremely simplified NTLM challenge-response diagram. It's more complicated, trust me. </p>

        <h3>NTLMv1</h3>
        <p>Totally un-secure. If you select this as an answer to a test question, I hope the question sounded something like "Which of the following is the worst choice?" How un-secure is NTLMv1?
          Microsoft put out a blog post titled <span style={{ fontWeight: `bold`}}><a href="https://docs.microsoft.com/en-us/archive/blogs/miriamxyra/stop-using-lan-manager-and-ntlmv1">"Stop using LAN Manager and NTLMv1!”</a> </span>. You can tell from the exclamation point on the end that they mean business for real this time, and are over all the jokers still using the original version. This past was from 2017, and NTLMv1 has been in use since 1993. NTLMv1 has a ton of security issues.<br></br>
          1. The party kicks off with the user/client requesting access to a resource on a LAN via the NTLMv1.
          2. The NTLMv1 server receives the request and sends the client/user a random 8-byte number as the challenge. This is also called a "nonce", number used once. The client/user receives this nonce and uses the hash of their log on password as the encryption key for a hashing algorithm. The problem starts with the hashes used (LM Hash, NT Hash) being DEC and MD4 (Message Digest 4) based. Both DEC and MD4 are considered weak algorithms. <br></br>
          3. The client sends the encrypted nonce back to the NTLM server, as the challenge response. The NTLM server looks up the username of the client/user, and uses the associated hash of their password it has stored as the key to decrypt the nonce. If the hash of the users password works to decrypt the response nonce, and the nonce matches the original the NTLM server sent, the NTLM server knows the request is authenticate. <br></br>
          NTLMv1 is vulnerable to MITM attacks, since the client/user never verifies the NTLMv1 server. It is also vulnerable to replay attacks, since the client response can be potentially intercepted and used again. Finally, it is also vulnerable to pass the hash attacks due to weak hashing algorithms.
        </p>
        <h3>NTLMv2</h3>
        <p>Microsoft realized the error of their ways and tried to correct the issues of NTLMv1 with NTLMv2. The client now ads a timestamp on their response to the challenge, for protection against replay attacks. It also encrypts the nonce and timestamp using a strong hashing algorithm, HMAC-MD5. However, it is still only client authentication, the NTLM server is never authenticated by the client. This leave the potential for MITM attacks.</p>

        <h3>NTLM2 Session </h3>
        <p>The big change here was adding in mutual client-server authentication. Now the NTLM server has to prove who it is to the client as well. Before there was the possibility of someone setting up a rouge NTLM server on the network. This provides stronger protection against MITM attacks.</p>

        <h3>NTLM today</h3>
        <p>If you can believe this, all versions of NTLM are still supported by Microsoft for backwards compatibility. Obviously NTLM2 Session is the strongest of three, but Microsoft recommends using a Kerberos instead of NTLM for network authentication. Kerberos is an open source network authentication protocol from MIT, and it is an absolute monster. So, Kerberos should be your first choice for secure network authentication, followed by NTLM2 Session and moving downwards. </p>

        <h3>Wrapping things up</h3>
        <p>NTLM is more about authentication onto a Windows based LAN, not as much for signing onto a website. It does not provide SSO (Single Sign On), so you would have to enter your username and password in again when accessing different servers/resources on that LAN.</p>

        <h3>Don't forget where you came from</h3>
        <p>NTLM falls into the identity and access family (authentication and/or authorization). It's main use is for authorization on LANs. It it considered outdated and Kerberos should be used as a replacement.</p>
        <Img fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}> </p>
        

<Link to="/ldap">Previous: LDAP</Link> <Link style={{ float: `right`}} to="/kerberos">Next: Kerberos</Link>
    </Layout>
)
export default Ntlm
export const query = graphql`
  query {
   front: file(relativePath: { eq: "NTLM.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "ntlm2.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "ntlm3.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front4: file(relativePath: { eq: "42NTLM.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  

  }
`