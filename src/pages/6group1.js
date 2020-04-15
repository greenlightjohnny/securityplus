import React, { Fragment } from "react"

import Layout from "../components/layout"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Info from "../components/info"

const Chap = props => (
  <React.Fragment>
   <Info title="Crypotography Intro"  description="We give a fast overview of asymmetric and symmetric cryptography and uses. Key exchanges and algorithm names." />
    <Layout>
    <h1>Multiple concepts, cryptography introduction</h1>
    <p>
      Covering symmetric and asymmetric algorithms, key exchanges, and use
      cases. Encryption is one of the most important concepts of modern day
      security, and is extremely important in data storage and transmission.
      Imagine someone manages to break into your LAN, and access your super
      secret files with all your personal bank account info on them. Not cool.
      The good news is that you can encrypt those files, so they can't be read
      without using your secret password (the "key") to read them. Here is the
      difference between a normal file and an encrypted file:
      <Img fluid={props.data.front.childImageSharp.fluid} />
      <p style={{ fontStyle: `italic`, fontSize: `.8rem` }}>
        You have no idea what the encrypted file says. Depending on which
        algorithm used to encrypt the text with, it can be considered virtually
        unbreakable without the secret "key" to unlock and decipher it.
      </p>
    </p>
    <h3>Symmetric vs asymmetric encryption algorithms</h3>
    <p>
      These are the two different types of encryption algorithms. Symmetric is
      very simple, it uses the same key to encrypt that it uses to decrypt.
      <Img fluid={props.data.front2.childImageSharp.fluid} />
      <p style={{ fontStyle: `italic`, fontSize: `.8rem` }}>
        You and your friend can create a secret key and send each other messages
        with no fear of anyone reading them!
      </p>{" "}
    </p>
    <p>
      Symmetric encryption algorithms are generally very fast, and do not take
      much computer resources (CPU, RAM) so your system won't be slowed down
      much by it. Asymmetric encryption algorithm, however, use much more of
      your computers resources. <br></br>
      Asymmetric encryption algorithms use one key to encrypt, and a different
      key to decrypt. These keys are a pair, and can't work without each other.
      They are called the "public key" and the "private key". Whatever you
      encrypt using one of these keys can only be decrypted by the other.
      Anything you encrypt with the private key can only be decrypted by the
      paired public key, and the reverse is also true.
      <Img fluid={props.data.front3.childImageSharp.fluid} />
      <p style={{ fontStyle: `italic`, fontSize: `.8rem` }}>
        Asymmetric encryption works in pairs, you can't encrypt something and
        decrypt it with the same key.
      </p>
    </p>
    <h3>What are the advantages of each??</h3>
    <p>
      Symmetric encryption is great if you already have things setup ahead of
      time. You meet with your friend in person and tell them your secret key.
      Not written down, not sent in an email, just kept in both your heads. This
      is super secure, if you are using a strong encryption algorithm, and works
      great. The catch here is that you have to meet your friend in person to
      tell them the secret key. If you emailed it, someone could simply
      intercept it. The same with regular mail. You can't encrypt it before
      sending because how would your friend unlock it without the secret key?
    </p>
    <p>
      Asymmetric encryption (also called public key cryptography) to the rescue!
      Both you and your friend each create your own set of private and public
      keys with an asymmetric encryption algorithm. You keep your private key
      just for yourself, never sharing it with anyone. Your public key, you give
      to anyone. You don't care how has. In fact, you email your friend public
      key in plaintext. You don't care who sees it. Your friend receives your
      email with your public key, and writes you an email back. When the finish
      the email, they use the asymmetric encryption algorithm with your public
      key to encrypt the message. Remember, the only thing that can decrypt a
      message encrypted with a public key is the private key pair. So you
      receive the email from your friend, and it is in cipher text. You can't
      read it. You use your private key on it, and suddenly you can read it. If
      it was encrypted in any other key besides your public key, you would not
      have been able to unlock it.
    </p>
    <p>
      Great, so your friend sent you an email securely, but what about emails to
      your friend? How can you encrypt those? Well using your friends public
      asymmetric encryption key! Hopefully they included it in their email
      message to you. You write a message back to your friend, encrypt it with
      their public key, and send it off. If anyone intercepts the message they
      can't read it, only your friends private key can decrypt the ciphertext.
    </p>
    <h3>Asymmetric uses </h3>
    <p>
      Besides key exchanges, asymmetric encryption can be used for digital
      signature signing. This provides authentication that the message was from
      you, and integrity that the message content was not altered during
      transit. Some asymmetric algorithms can do both, while others focus on
      just one. <br></br>
      Non-repudiation is another concept the CompTIA are big on. Basically it
      means you can't deny something. In this case, you would not be able to
      deny sending me a death threat you encrypted with your private key,
      because if I was able to use your public key to decrypt and read the death
      threat..... it means you must have sent it, because the only key that
      works to unlock things encrypted with a private key is the public key pair
      of it. When you encrypt something with your private key, you are basically
      signing it with a "signature" that proves it only came from you.
    </p>
    <h3>Key exchange</h3>
    <p>
      Using asymmetric encryption algorithms with their public/private key pairs
      gives you a way to securely start communication with someone online,
      without having set anything up beforehand. Anyone could listen in on the
      data sent back and forth to set this up, and still not be able to decrypt
      anything after the setup was complete. So what good is symmetric
      encryption? Well the disadvantage to asymmetric algorithms is their slower
      speed and higher computer resource usages. Asymmetric works for smaller
      items which you want to encrypt, but would not be a good choice for large
      files. As a result, asymmetric encryption is usually just used to securely
      set up and exchange a symmetric encryption key between the two parties,
      called the "key exchange". The same symmetric encryption key is then used
      by both parties to send data back and forth, since it is much faster.
      Asymmetric encryption was just used as a way to exchange a symmetric
      encryption key. Cool stuff.
      <Img fluid={props.data.front4.childImageSharp.fluid} />
      <p style={{ fontStyle: `italic`, fontSize: `.8rem` }}></p>
    </p>
    <h3>Asymmetric encryption algorithms</h3>
    <p>
      The algorithm is basically just a program that uses your private key (also
      called your password sometimes) to produce a unique cipher which encrypts
      your data. There are a few of these in common use, and each will be gone
      over later in more depth. The ones that CompTIA wants you to know about
      are: DE, RSA, DSA, ECC, PGP, and GPG. Some are used for the key exchanges,
      but some are also used only for signing digital signatures. You can skip
      ahead to section 6.2 and read about them:{" "}
      <Link to="/asymmetric"> Asymmetric Algorithms</Link>
    </p>
    <h3>Symmetric encryption algorithms</h3>
    <p>
      The symmetric encryption algorithms are often what is used to encrypt and
      decrypt data sent between two parties, after they have used the key
      exchange to securely obtain the same symmetric encryption key. Remember,
      symmetric encryption uses the same key for both the encryption and
      decryption, so the key must be kept secure. That is data in transit, such
      as in an email. Symmetric encryption is also used to encrypted data at
      rest, your secret meme stash file on your laptop, for example. In this
      case you would encrypt it and keep the key to yourself, not handing it out
      to anyone. There are a bunch of symmetric encryption algorithms, the ones
      the CompTIA has deemed worthy of study are: AES, DES, 3DES, RC4, Blowfish,
      and Twofish. You will see these constantly. The are covered in section
      6.2, coming up after you finish the current 6.1 section. You Can wait or
      skip ahead to read about them here:
      <Link to="/symmetric"> Symmetric Algorithms</Link>
    </p>
    <Img fluid={props.data.front4.childImageSharp.fluid} />
    <p style={{ fontStyle: `italic`, fontSize: `.8rem` }}></p>
    <Link to="/cryptography">Previous: Cryptography</Link>{" "}
    <Link style={{ float: `right` }} to="/hashing">
      Next: Hashing
    </Link>
  </Layout>
  </React.Fragment>
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
