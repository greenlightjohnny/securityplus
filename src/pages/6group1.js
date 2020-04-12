import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Chap = props => (
    <Layout>
        <h1>Multiple concepts</h1>
        <p>Covering symmetric and asymmetric algorithms, hashing, salt, IV, and nonce. Encryption is one of the most important concepts of modern day security, and is extremely important in data storage and transmission. Imagine someone manages to break into your LAN, and access your super secret files with all your personal bank account info on them. Not cool. The good news is that you can encrypt those files, so they can't be read without using your secret password (the "key") to read them. Here is the difference between a normal file and an encrypted file:
        <Img  fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>You have no idea what the encrypted file says. Depending on which algorithm used to encrypt the text with, it can be considered virtually unbreakable without the secret "key" to unlock and decipher it.
            </p>
        </p>

        <h3>Symmetric vs asymmetric encryption algorithms</h3>
        <p>These are the two different types of encryption algorithms. Symmetric is very simple, it uses the same key to encrypt that it uses to decrypt.<Img  fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>You and your friend can create a secret key and send each other messages with no fear of anyone reading them!
            </p> </p>
            <p>Symmetric encryption algorithms are generally very fast, and do not take much computer resources (CPU, RAM) so your system won't be slowed down much by it. Asymmetric encryption algorithm, however, use much more of your computers resources. <br></br>
            Asymmetric encryption algorithms use one key to encrypt, and a different key to decrypt. These keys are a pair, and can't work without each other. They are called the "public key" and the "private key". Whatever you encrypt using one of these keys can only be decrypted by the other. Anything you encrypt with the private key can only be decrypted by the paired public key, and the reverse is also true. 
            <Img  fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Asymmetric encryption works in pairs, you can't encrypt something and decrypt it with the same key.
            </p>
            </p>
            <h3>What are the advantages of each??</h3>
            <p>Symmetric encryption is great if you already have things setup ahead of time. You meet with your friend in person and tell them your secret key. Not written down, not sent in an email, just kept in both your heads. This is super secure, if you are using a strong encryption algorithm, and works great. The catch here is that you have to meet your friend in person to tell them the secret key. If you emailed it, someone could simply intercept it. The same with regular mail. You can't encrypt it before sending because how would your friend unlock it without the secret key?</p> 
            <p>Asymmetric encryption to the rescue! Both you and your friend each create your own set of private and public keys with an asymmetric encryption algorithm. You keep your private key just for yourself, never sharing it with anyone. Your public key, you give to anyone. You don't care how has. In fact, you email your friend public key in plaintext. You don't care who sees it. Your friend receives your email with your public key, and writes you an email back. When the finish the email, they use the asymmetric encryption algorithm with your public key to encrypt the message. Remember, the only thing that can decrypt a message encrypted with a public key is the private key pair. So you receive the email from your friend, and it is in cipher text. You can't read it. You use your private key on it, and suddenly you can read it. If it was encrypted in any other key besides your public key, you would not have been able to unlock it.</p>
            <p>Great, so your friend sent you an email securely, but what about emails to your friend? How can you encrypt those? Well using your friends public asymmetric encryption key! Hopefully they included it in their email message to you. You write a message back to your friend, encrypt it with their public key, and send it off. If anyone intercepts the message they can't read it, only your friends private key can decrypt the ciphertext.</p>
            <h3>Confidentiality and Non-repudiation </h3>
            <p>With asymmetric encryption, you achieve confidentiality: No one can read anything sent you which was encrypted with your public key, except the private key pair to it. And only you have the private key. Now people can send you dank memes encrypted with your public key, and rest easy knowing that these memes are safe from prying eyes, and can only be decrypted by you. Meme theft is very real. The CompTIA is big on the "confidentiality" word. They use it tons. They want you to know that encryption provides confidentiality. <br></br>
            Non-repudiation is another concept the CompTIA are big on. Basically it means you can't deny something. In this case, you would not be able to deny sending me a death threat you encrypted with your private key, because if I was able to use your public key to decrypt and read the death threat..... it means you must have sent it, because the only key that works to unlock things encrypted with a private key is the public key pair of it. When you encrypt something with your private key, you are basically signing it with a "signature" that proves it only came from you.
            </p>

            <h3>Key exchange</h3>
            <p>Using asymmetric encryption algorithms with their public/private key pairs gives you a way to securely start communication with someone online, without having set anything up beforehand. Anyone could listen in on the data sent back and forth to set this up, and still not be able to decrypt anything after the setup was complete. So what good is symmetric encryption? Well the disadvantage to asymmetric algorithms is their slower speed and higher computer resource usages. Asymmetric works for smaller items which you want to encrypt, but would not be a good choice for large files. As a result, asymmetric encryption is usually just used to securely set up and exchange a symmetric encryption key between the two parties, called the "key exchange". The same symmetric encryption key is then used by both parties to send data back and forth, since it is much faster. Asymmetric encryption was just used as a way to exchange a symmetric encryption key. Cool stuff.
            <Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>
            </p>

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
   front: file(relativePath: { eq: "ensec.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "ensym.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "enays2.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front4: file(relativePath: { eq: "always.jpeg" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  

  }
`