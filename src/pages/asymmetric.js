import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Chap = props => (
    <Layout>
        <h1>MS-CHAP: Microsoft CHAP </h1>
        <i>"MS-CHAP is the Microsoft version of the Challenge-Handshake Authentication Protocol, CHAP. The protocol exists in two versions, MS-CHAPv1 (defined in RFC 2433) and MS-CHAPv2 (defined in RFC 2759" <br></br> -<a href="https://en.wikipedia.org/wiki/MS-CHAP">Wikipedia</a> </i>

        <h3>Asymmetric encryption algorithms</h3>
            <p>The algorithms is basically just a program that uses your private key (also called your password sometimes) to produce a unique cipher which encrypts your data. There are a few of these in common use, and each will be gone over later in more depth. The ones that CompTIA wants you to know about are:  DE, RSA, DSA, ECC, PGP, and GPG. Some are used for the key exchanges, but some are also used only for signing digital signatures. You can skip ahead to section 6.2 and read about them: <Link to="/asymmetric"> Asymmetric Algorithms</Link></p>

            <p> <span style={{ fontWeight: `bold`}}>DE: Diffie-Hellman. </span>This one is basically black magic. It is a bit different from the others. Instead of each party each creating their own pair of private and public keys, and using these to exchange the symmetric key, DE allows the two parties to create the exact same symmetric encryption key while sending all the information needed to create it in plaintext. Each party uses random prime numbers they pick to do operations, and send it back to the other party, who does the same. This goes back and forth until SOMEHOW they both end up with the same symmetric key, which they than use to encrypt everything. The mind blowing part here is that there is no encryption before hand, it is all sent in plaintext, but anyone listening in is not able to create the same symmetric key that both the separate parties were able to. If this does not make sense, you are not alone. Magic.</p>
            <p><span style={{ fontWeight: `bold`}}> RSA: Rivest Shamir Adleman. </span>
            RSA has been in use in 1983 and is apparently the most common asymmetric encryption algorithms. I have zero evidence to back this up. RSA is more normal, it generates public and private key pairs. The public key can be shared freely with anyone. RSA can use key sizes of over 4096-bits, and overall the larger the key size the harder it is to crack. However larger key sizes also mean more process power is needed to decrypt it, even when you have the private key. This means lower powered devices, such as mobile phones, might suffer from speed issues with larger RSA key sizes. In addition to use for exchanging symmetric keys, RSA is also used to sign digital signatures. </p>
            <p><span style={{ fontWeight: `bold`}}> DSA: Digital Signature Algorithm. </span>This was developed by the NSA. That should give everyone a quick pause. The NIST (National Institute of Standards and Technology), a US Government agency that the CompTIA wants you to know about, set it as a standard for government use. DSA is used for signing documents digitally, but not for encrypting them. The terms get kind of murky, since signing is encryption. Basically DSA is not used for exchanging keys, only for attaching an encrypted signature to documents. This signature is encrypted with the senders private key. It provides authentication (proof of who it came from), non-repudiation (they can't deny sending it), and integrity (you know nothing has been changed on the attacked document, through hashing which we will cover later).</p>
            <p><span style={{ fontWeight: `bold`}}> ECC: Elliptical Curve Cryptography. </span>
            Yeah this is exactly what it sounds like, using elliptical curves for cryptography. Prefectly normal! It is used for public and private key generation, digital signatures, and symmetric key exchanges, just like RSA. Apparently it uses less computer resources to calculate than RSA, so it works better on devices with weak hardware. It is newer in terms of being used, having only been around since about 2005. 
            </p>
            <p><span style={{ fontWeight: `bold`}}>PGP: Pretty Good Privacy. </span>The name really inspires confidence! PGP is most commonly used with emails. Also used on entire disks, files, and directories. It provides confidentiality (through encryption), authentication and non-repudiation (through hashing). It is used for encrypting and decrypting, and uses asymmetric encryption for public and private key generation. PGP is also used for digitally signing documents. PGP has many different versions, OpenPGP is one free and open source version of it. It supports many different symmetric and asymmetric encryption algorithms, so it is really more of an encryption program than a specific algorithm.  </p>
            <p><span style={{ fontWeight: `bold`}}>DE: Diffie-Hellman.</span></p>

<Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/chap">Previous: CHAP</Link> <Link style={{ float: `right`}} to="/securetoken">Next: Secure Token</Link>
    </Layout>
)
export default Chap

export const query = graphql`
  query {
   front: file(relativePath: { eq: "papdanger.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "mschapwi.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "mschap3.jpeg" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front4: file(relativePath: { eq: "42mschap.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  

  }
`