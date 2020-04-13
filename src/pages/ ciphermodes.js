import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Modes = props => (
    <Layout>
        <h1>Symmetric encryption algorithms</h1>
        <i>"Symmetric-key algorithms[a] are algorithms for cryptography that use the same cryptographic keys for both encryption of plaintext and decryption of ciphertext. The keys may be identical or there may be a simple transformation to go between the two keys.[1] The keys, in practice, represent a shared secret between two or more parties that can be used to maintain a private information link.[2] This requirement that both parties have access to the secret key is one of the main drawbacks of symmetric key encryption, in comparison to public-key encryption (also known as asymmetric key encryption).[3][4] " <br></br> -<a href="https://en.wikipedia.org/wiki/Symmetric-key_algorithm">Wikipedia</a> </i>
       

        <h3>Cipher modes</h3>
        <p>Block ciphers break the plaintext up into blocks before encrypting it. Cipher modes are different ways of encrypting the blocks. ECB, CBC, CTR, and GCM are all cipher modes you need to know. An example, you would use a block cipher such as Twofish and pick one of these modes to operate it in. "AES using CBC", where AES is the block cipher algorithm, and CBC is the cipher mode.</p>

        <h3>ECB: Electronic Code Book</h3>
        <p>The most simple and also the worst. ECB encrypts every single block with the exact same key. The result is if the plaintext of one block matches the plaintext of another block, you end up with the ciphertext blocks of the two matching each other. The result of encrypting a photo with ECB can be seen below.
        <Img  fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>In ECB mode, the symmetric cipher (perhaps DES or Blowfish) breaks the cipher into block, and uses the exact same key for each block. Not ideal.
            </p>
            <Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Using your block cipher in ECB mode is not an ideal first choice for sending nudes.
            </p>
        </p>

        <h3>CBC: Cipher Block Chaining</h3>
        <p>A big step up from ECB, CBC starts out with a random IV (Initialization Vector) which is usually a number (nonce) that is the same size as the block to be encrypted. The first block of plaint text and the IV are XORed together. An XOR (Exclusive Or) operation compares two operators, and outputs 0 if they are equal, and 1 if they are not. This is done at the binary level, since everything is really just a bunch of 1's and 0's.
        <Img  fluid={props.data.front5.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Stackoverflow explains XOR with encryption. Essentially, using XOR on the blocks before encryption guarantees a more random pattern. Two plaintext blocks that are exactly the same will end up with different ciphertext blocks, avoiding the problem ECB had.
            </p>
            After the IV is XORed with the first plaintext block, it is encrypted with the secret key. The result is a block of ciphertext, and that block of ciphertext is XORed with the next plaintext block before being encrypted with the secret key. Each block depends on the previous block, they are all chained together, and must be encrypted and decrypted in order.
            <Img  fluid={props.data.front6.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Here the circle with the plus symbol is the XOR operation. CBC mode chains everything together, and provides a form of pseudo-randomness.
            </p>
        </p>

        <h3>CTR: Counter, also called CM (Counter Mode)</h3>
        <p>CTR is used to turn a block cipher into a stream cipher. It uses an nonce (IV) plus an incrementing counter to encrypt each block, so each block is not dependant on the others. CTR mode sees how many blocks there are, and each one is encrypted using an nonce and a counter. <br></br>
        The process is a bit strange, but the nonce and counter are combined, and those are encrypted using the secret key. The result of this is XORed with the plaintext block, and the result is the ciphertext. CTR mode is very fast, because it does not have to wait on each block, it can encrypt or decrypt many at once.
        <Img  fluid={props.data.front7.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>
        </p>

        <h3>GCM: Galois/Counter Mode</h3>
        <p>GCM combines Galois field multiplication with the CTR (counter) cipher. I'm not sure what that means either. Essentially it is CTR with hashing added for authentication in addition to confidentiality. Because it is based on CTR, it is also very fast and does not rely on the previous block to be encrypted before moving on.   <Img  fluid={props.data.front8.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Fast and provides authentication, how it works, no one knows.
            </p> </p>

        <h3>Wrap up</h3>
        <p>You will need to keep track of which ciphers are considered the strongest and weakest, along with with key sizes for each, and encryption block sizes. Cipher modes will also need to be kept track of, for example ECB is on the out, CTR and GCM don't rely on the previous blocks and are faster, CBC chains together but is slower. IV, nonce, and XOR are also listed as terms the CompTIA wants you to know.</p>

<Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/chap">Previous: CHAP</Link> <Link style={{ float: `right`}} to="/securetoken">Next: Secure Token</Link>
    </Layout>
)
export default Modes

export const query = graphql`
  query {
   front: file(relativePath: { eq: "ensym.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "desmeme.jpeg" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "ecb2.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front4: file(relativePath: { eq: "ecb3.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front5: file(relativePath: { eq: "xor.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front6: file(relativePath: { eq: "cbc.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front7: file(relativePath: { eq: "ctr1.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front8: file(relativePath: { eq: "gcm2.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  

  }
`