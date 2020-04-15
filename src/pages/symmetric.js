import React from "react"
import Info from "../components/info"
import Layout from "../components/layout"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Chap = props => (
    <Layout>
      <Info title="Symmetric Encryption Algorithms" description="Blowfish has the best name, but AES gets all the love and fame. DES and RC4 are totally out, and you will be made fun of for using them." />
        <h1>Symmetric Encryption Algorithms</h1>
        <i>"Symmetric-key algorithms[a] are algorithms for cryptography that use the same cryptographic keys for both encryption of plaintext and decryption of ciphertext. The keys may be identical or there may be a simple transformation to go between the two keys.[1] The keys, in practice, represent a shared secret between two or more parties that can be used to maintain a private information link.[2] This requirement that both parties have access to the secret key is one of the main drawbacks of symmetric key encryption, in comparison to public-key encryption (also known as asymmetric key encryption).[3][4] " <br></br> -<a href="https://en.wikipedia.org/wiki/Symmetric-key_algorithm">Wikipedia</a> </i>
        <Img  fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>As you can tell, symmetric encryption uses the same key to encrypt and decrypt.
            </p>
        <p>Symmetric encryption algorithms are commonly used to encrypt data in transit, as well as encrypting data at rest. Symmetric encryption uses the same key to encrypt and decrypt the data. It can encrypt an entire disk, directory, or a single file. Symmetric encryption is faster than asymmetric encryption, and requires less system resources. The only problem is that both parties must have the same key, and transmitting it securely is a problem. The symmetric algorithms you need to know for the test are: AES, DES, 3DES, RC4, Blowfish, and Twofish. These are either "block ciphers", which break the data to be encrypted into smaller chunks before encryption, or stream ciphers. </p>
        <h3>Block size</h3>
        <p>The plaintext that is going to be encrypted is broken into smaller chunks, the block size. This is usually given in bits. For example, a 128 bit block size means the encryption algorithm breaks the plaintext down into smaller blocks, each one 128 bits in size. Generally a larger block size is considered stronger. Once broken into blocks the encryption algorithm can process them, and there are different methods of doing this. These are the the cipher modes, how it processes the blocks of plaintext</p>
        <p>Cipher modes are covered in the next section</p>

        <h3>AES: Advanced Encryption Standard</h3>
        <p>Our friends at the NIST have made AES, a symmetric block cipher, an official US Government encryption standard. The NSA has cleared it for use to secure top secret documents. AES encrypts in 128 bit block sizes. AES has three versions: AES-128, AES-192, and AES-256. As is usually the case, the 256 key version is stronger than the 128 key, but does require more time and resources. All versions are currently considered extremely strong.</p>

        <h3>DES: Digital Encryption Standard</h3>
        <p>An older block cipher algorithm which encrypts in 64 bit blocks, and has a key length of only 56 bits. It is not considered secure due to this, has has been cracked in as few as 22 minutes. People will laugh at you if you pick this as your first choice for encryption.
        <Img  fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>DES is so out, AES is all the rage.
            </p>
        </p>

        <h3>3DES: Triple DES</h3>
        <p>This is exactly like what is sounds, DES used three times in a row to get a key length of 168-bits. In the end this ended up only being 112 bits due to MITM attacks. The NIST further said it only provided an effective key of 80 bits when all was said in done. As a result, the NIST deprecated it in 2017. Despite this, it is still in widespread use and being developed more. Firefox the web browser apparently still uses it.</p>

        <h3>RC4: Rivest Cipher 4</h3>
        <p>This is a very fast symmetric stream cipher (the only stream cipher on this list) that once saw widespread use, and is now considered insecure. WEP, the weak WiFi standard, uses RC4. Part of the reason WEP had to be replaced with WPA was the weak RC4 cipher. TLS used to use RC4 as its cipher before switching to AES.</p>

        <h3>Blowfish</h3>
        <p>This is the best name out of all the symmetric encryption ciphers, so nice not to have memorize yet another acronym. Blowfish is a symmetric block cipher, using 64-bit block sizes to encrypt and key lengths between 32 and 448 bits. It has not been broken to date, however, the inventor of it recommends using Twofish instead for even more security. Blowfish is not that common, which is weird considering the weark RC4, DES, and 3DES are all still being used. Personally I would rather use an encryption protocol that had never been broken. A password hashing function called bcrypt uses Blowfish, and the CompTIA wants you to know about bcrypt. We cover it later, but CompTIA considers bcrypt a "key stretching algorithm". An upcoming section <Link to="/stretching">Previous: Key stretching algorithms </Link>goes over key stretching and bcrypt.</p>

        <h3>Twofish</h3>
        <p>Two fish is also a symmetric block cipher, related to Blowfish. Twofish uses a 128 bit block size to encryption, just like AES. Key sizes can be up to 256 bits. Twofish is considered very strong, and the only advantage AES has over it is speed. Twofish is free for anyone to use, and yet somehow people are still out there picking DES.</p>

        <h3>Block ciphers vs stream ciphers</h3>
        <p>On our list all of the ciphers were block ciphers except for RC4, which is a stream cipher. Stream ciphers encrypt the plaintext as a continuous stream, a bit or byte at a time. Generally faster than block ciphers.  A block cipher takes the plaintext and breaks into smaller blocks, such as 128 bits per block with AES, and encrypts each block. Block ciphers can operate in different modes, which describe the method used to encrypt the blocks.</p>

        <h3>Cipher modes</h3>
        <p>Block ciphers break the plaintext up into blocks before encrypting it. Cipher modes are different ways of encrypting the blocks. ECB, CBC, CTR, and GCM are all cipher modes you need to know. An example, you would use a block cipher such as Twofish and pick one of these modes to operate it in. "AES using CBC", where AES is the block cipher algorithm, and CBC is the cipher mode.</p>

       

        <h3>Wrap up</h3>
        <p>You will need to keep track of which ciphers are considered the strongest and weakest, along with with key sizes for each, and encryption block sizes. Cipher modes will also need to be kept track of, for example ECB is on the out, CTR and GCM don't rely on the previous blocks and are faster, CBC chains together but is slower. IV, nonce, and XOR are also listed as terms the CompTIA wants you to know.</p>

<Img  fluid={props.data.front8.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/cryptography">Previous: Cryptography</Link> <Link style={{ float: `right`}} to="/ciphermodes">Next: Cipher modes</Link>
    </Layout>
)
export default Chap

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

      front8: file(relativePath: { eq: "61a3.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  

  }
`