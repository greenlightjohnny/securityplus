import React from "react"
import Info from "../components/info"
import Layout from "../components/layout"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Modes = props => (
    <Layout>
      <Info title="Cipher Modes" description="So many cipher modes to pick from! Just don't pick ECB like Zoom did. ECB is a weak cipher mode, and it was an epic mistake." />
        <h1>Cipher modes</h1>
        <i>"In cryptography, a block cipher mode of operation is an algorithm that uses a block cipher to provide information security such as confidentiality or authenticity. A block cipher by itself is only suitable for the secure cryptographic transformation (encryption or decryption) of one fixed-length group of bits called a block.[2] A mode of operation describes how to repeatedly apply a cipher's single-block operation to securely transform amounts of data larger than a block." <br></br> -<a href="https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation">Wikipedia</a> </i>
       

        <h3>Symmetric ciphers vs cipher modes</h3>
        <p>Symmetric block cipher algorithms describe a way to encrypt a chunk of data which is a certain size. Weak the weak DES symmetric cipher encrypts a 56 bit block, while AES and Twofish encrypt a larger 128 bit block. So what if the plaintext you want to encrypt is larger than that? Well for that we have cipher modes! Cipher modes describe different ways the symmetric cipher can be operated repeatedly on different blocks of plaintext, and decrypt them to hook them all back together again. So you might see something like "AES256-ECB", and that is simply saying that the symmetric encryption algorithm AES (Advanced Encryption Algorithm) is being used with a 256 bit key size and is being operated in the ECB mode. Please don't use AES with ECB though.</p>

        <h3>ECB: Electronic Code Book</h3>
        <p>The most simple and also the worst. ECB encrypts every single block with the exact same key. The result is if the plaintext of one block matches the plaintext of another block, you end up with the ciphertext blocks of the two matching each other. The result of encrypting a photo with ECB can be seen below.
        <Img  fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>In ECB mode, the symmetric cipher (perhaps DES or Blowfish) breaks the cipher into block, and uses the exact same key for each block. Not ideal.
            </p>
            <Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Using your block cipher in ECB mode is not an ideal first choice for sending nudes.
            </p>
        </p>

        <h3>ECB and a real world fudge up</h3>
        <p>During the 2020 COVID19 pandemic and quarantine a ton of people needed a new way to communicate. Online classes were mandatory. Most of the software available sucked, but Zoom skyrocketed in popularity. Zoom was a video teleconferencing company, and they had some pretty user friendly software on the market. Almost overnight, it seemed, everyone was downloading and using Zoom. Zoom stated they were using the AES symmetric encryption cipher for security, which was considered very strong. News soon broke that they were using the AES-128 version instead of the more secure AES-256 version, which was double the key size. No big deal, AES-128 was still decent. Just a tiny bit weird, why would a new company pick AES-128 instead of AES-256. 
          <p>Next stunning news broke: Zoom was running the AES-128 in ECB mode! The whole world laughed at them, and large corporations started banning the use of Zoom. It was laughable. This is such and epic fudge up that people began to suspect it had been done on purpose. No self respecting developer would pick ECB to use for security, it defied logic. Zoom had many connections to China, including funding and offices. Not only that, but the symmetric keys were apparently not kept secret, and sent through servers in China. The suspicion became that the Chinese Government had a hand in forcing Zoom to use weak encryption so they could break it and spy.
          <Img  fluid={props.data.front9.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Zoom executive describing their encryption prior to the shocking discovery that they were running a video conference cipher in ECB mode.
            </p>
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
        <p>Keep track of what cipher modes are considered strong, which are weak, which are slow, and which are fast. Also get used to looking text like "Blowfish-GCM", "AES-CBC", "AES256-GCM", and other combinations. There is no real standard for it. Sometimes the cipher is just named, other times the cipher and the key size is name, other times the cipher and mode are name, and sometimes the cipher, key size, and mode are all named.</p>

<Img  fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/symmetric">Previous: Symmetric encryption</Link> <Link style={{ float: `right`}} to="/asymmetric">Next: Asymmetric encryption </Link>
    </Layout>
)
export default Modes

export const query = graphql`
  query {
   front: file(relativePath: { eq: "62r2.png" }) {
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

      front9: file(relativePath: { eq: "zoom.jpeg" }) {
        childImageSharp {
         
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  

  }
`