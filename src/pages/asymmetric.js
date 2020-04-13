import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Chap = props => (
    <Layout>
        <h1>Asymmetric encryption algorithms </h1>
        <i>"Public-key cryptography, or asymmetric cryptography, is a cryptographic system that uses pairs of keys: public keys, which may be disseminated widely, and private keys,which are known only to the owner. The generation of such keys depends on cryptographic algorithms based on mathematical problems to produce one-way functions. Effective security only requires keeping the private key private; the public key can be openly distributed without compromising security. " <br></br> -<a href="https://en.wikipedia.org/wiki/Public-key_cryptography">Wikipedia</a> </i>

        <h3>Asymmetric encryption algorithms (Public key cryptography)</h3>
            <p>Asymmetric encryption can provide confidentiality through encryption, and authentication. It is most commonly used for key exchanges, where symmetric encryption keys are exchanged. Asymmetric encryption is slower than symmetric, and requires more computer resources. The ones the CompTIA wants to test you on are: DE (DE groups, DHE, ECDHE), RSA, DSA, ECC, PGP, and GPG.</p>

            <p>Asymmetric encryption algorithms use one key to encrypt, and a different key to decrypt. These keys are a pair, and can't work without each other. They are called the "public key" and the "private key". Whatever you encrypt using one of these keys can only be decrypted by the other. Anything you encrypt with the private key can only be decrypted by the paired public key, and the reverse is also true. This can provide authentication. If you receive an email claiming to be your friend that is encrypted, you can try to use your friends public key to decrypt it. If the key works, it means it was encrypted with your friends private key. That is all paired public key can can open, nothing else. 
            </p>
            <p>
                Note that in this case it did not provide confidentiality, because anyone with the public key could have intercepted and read the email. However, if your friend used your public key to encrypt an email and send it to you, it would provide confidentiality since only your private key could unlock it. It would not provide authentication, because anyone with your public key could have encrypted the email. For two way confidentiality and authentication, both parties must have their own pair of public and private keys.
            <Img  fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Here the recipient knows the email had confidentiality, no one else could have read it. It does not provide authentication, however, because anyone with his public key could have encrypted it and pretended to be his granny.
            </p>
            </p>

            <p> <span style={{ fontWeight: `bold`}}>DE: Diffie-Hellman. </span>This one is basically black magic. It is a bit different from the others, and is strictly used for key exchanges, not authentication. Instead of each party each creating their own pair of private and public keys, and using these to exchange the symmetric key, DE allows the two parties to create the exact same symmetric encryption key while sending all the information needed to create it in plaintext. Each party uses random prime numbers they pick to do operations, and send it back to the other party, who does the same. This goes back and forth until SOMEHOW they both end up with the same symmetric key, which they than use to encrypt everything. The mind blowing part here is that there is no encryption before hand, it is all sent in plaintext, but anyone listening in is not able to create the same symmetric key that both the separate parties were able to. If this does not make sense, you are not alone. Magic.
            <Img  fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>DE is used to create/exchange secret symmetric encryption keys. It is not used for signing digital signature (authentication).
            </p>
            </p>
            <h3>Static vs ephemeral keys</h3>
            <p>Before we go any further, it is important to mention that asymmetric keys can be either "static" or "ephemeral". This is exactly what it sounds like, static keys stick around for a bit of time. Ephemeral keys don't last very long, such as just one session, or data exchange. DE has a few different versions, some use static keys and others ephemeral</p>

            <p><span style={{ fontWeight: `bold`}}> DHE: Diffie-Hellman Ephemeral </span>
            Pretty simple, this is DH that uses short lived keys.
             </p>

             <p><span style={{ fontWeight: `bold`}}> ECDHE: Elliptical Curve Diffie-Hellman Ephemeral </span>
                We cover Elliptical Curve a few steps below. For now just know it is DH that uses elliptical curves for the key generation, and they are ephemeral.
             </p>

             <h3>DE Groups</h3>
             <p>Some versions "groups" of DH are stronger than others. Each DH group is labeled with a number, "DH group 1" and incrementing upwards. The higher the group number the stronger the security. So you would pick "DH group 17" over "DH group 7". The group selection is done automatically in the background, called a negotiation. The strongest group that both parties support is picked.</p>

            


            <p><span style={{ fontWeight: `bold`}}> RSA: Rivest Shamir Adleman. </span>
            RSA has been in use in 1983 and is apparently the most common asymmetric encryption algorithms. I have zero evidence to back this up. RSA is more normal, it generates public and private key pairs. The public key can be shared freely with anyone. RSA can use key sizes of over 4096-bits, and overall the larger the key size the harder it is to crack. However larger key sizes also mean more process power is needed to decrypt it, even when you have the private key. This means lower powered devices, such as mobile phones, might suffer from speed issues with larger RSA key sizes. In addition to use for exchanging symmetric keys, RSA is also used to sign digital signatures. </p>

            <p><span style={{ fontWeight: `bold`}}> DSA: Digital Signature Algorithm. </span>This was developed by the NSA. That should give everyone a quick pause. The NIST (National Institute of Standards and Technology), a US Government agency that the CompTIA wants you to know about, set it as a standard for government use. DSA is used for signing documents digitally, but not for encrypting them. For example, hashing your email with SHA and encrypting "signing" that hash with your DSA private key. The terms get kind of murky, since signing is encryption. Basically DSA is not used for exchanging keys, only for attaching an encrypted signature to documents. This signature is encrypted with the senders private key. It provides authentication (proof of who it came from), non-repudiation (they can't deny sending it), and integrity (you know nothing has been changed on the attacked document, through hashing which we will cover later).</p>



            <p><span style={{ fontWeight: `bold`}}> ECC: Elliptical Curve Cryptography. </span>
            Yeah this is exactly what it sounds like, using elliptical curves for cryptography. Prefectly normal! It is used for public and private key generation, digital signatures, and symmetric key exchanges, just like RSA. Apparently it uses less computer resources to calculate than RSA, so it works better on devices with weak hardware. It is newer in terms of being used, having only been around since about 2005. Several DH types use ECC to generate keys.
            </p>


            <p><span style={{ fontWeight: `bold`}}>PGP: Pretty Good Privacy. </span>The name really inspires confidence! PGP is most commonly used with emails. Also used on entire disks, files, and directories. It provides confidentiality (through encryption), authentication and non-repudiation (through hashing). It is used for encrypting and decrypting, and uses asymmetric encryption for public and private key generation. PGP is also used for digitally signing documents. PGP has many different versions, OpenPGP is one free and open source version of it. It supports many different symmetric and asymmetric encryption algorithms, so it is really more of an encryption program than a specific algorithm. It should be placed in a separate category, but the CompTIA but it when asymmetric algorithms. </p>
            <p><span style={{ fontWeight: `bold`}}>GPG: GNU Privacy Guard.</span>
            This is a free and open source software encryption program. It can be used on multiple platforms including Linux, Windows, macOS, and Android. It is not really a specific algorithms, because it can use different symmetric algorithms, different asymmetric algorithms, and different hashing algorithms. In addition it can use multiple different combinations of these. The CompTIA should probably not have place it under "asymmetric algorithms".
            
            </p>
            <p>GPG can be used for key exchanges, symmetric encryption, digital signatures, and hashing. So authentication, confidence, integrity, and non-repudiation are all possible with GPG. It supports RSA and DSA for asymmetric algorithms. Symmetric ciphers supported include Blowfish, AES, Twofish, 3DES, and more. For hashing it supports MD5, RIPEMD, and most of the SHA hashes.</p>
            <h3>Wrap up</h3>
            <p>You will be seeing these lots. Understand the public and private key pair inside and out, and which key provides what for who. Make sure you know all the asymmetric algorithms, and what each one can be used for. Key exchange? Confidentiality? Authentication? Digital signatures?</p>

<Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/ciphermodes">Previous: Cipher Modes </Link> <Link style={{ float: `right`}} to="/stretching">Next: Key stretching</Link>
    </Layout>
)
export default Chap

export const query = graphql`
  query {
   front: file(relativePath: { eq: "enays2.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "de.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
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

      front4: file(relativePath: { eq: "62raa.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  

  }
`