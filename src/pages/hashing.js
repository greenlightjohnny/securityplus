import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Chap = props => (
    <Layout>
        <h1>Hash functions </h1>
        <i>"A cryptographic hash function (CHF) is a hash function that is suitable for use in cryptography. It is a mathematical algorithm that maps data of arbitrary size (often called the "message") to a bit string of a fixed size (the "hash value", "hash", or "message digest") and is a one-way function, that is, a function which is practically infeasible to invert" <br></br> -<a href="https://en.wikipedia.org/wiki/Cryptographic_hash_function">Wikipedia</a> </i>

        <h3>Hashing for fun and profit</h3>
            <p>Hashes are another super cool cryptography algorithm type. They encrypt, just like symmetric and asymmetric algorithms, but this time it is a one way street: Whatever you encrypt can't be decrypted, the result is called the "hash". And more, it takes any size item and produces a set hash size. So your 50 page email and 20 word email would end up having the exact same hash size length. If you run the exact same text through the hash function again, it will produce the exact same hash. If you change one single letter on the text, the hash will be completely different, looking nothing like the first hash, even though it was only a minor change.

            <Img  fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>
            </p>
            <h3>Hashing use cases</h3>
            <p>Hashing is used to verify the integrity of data transmitted from one device to another. The CompTIA is big on data integrity. Verified integrity means that the data was not changed during the transmission. Changes to the data could be from corruption, missing packets, incomplete file transfers, or altered by a third party. Accidental and purposeful data changes fall into the same group. Hashing is also a common method for storing passwords in a database. When a user enters there username and password, the computer will run the hashing algorithm on the password and compare the resulting hash with the hash stored in its database. If the hashes match, it lets the user in. This means that is someone broke into the computer and stole the database of passwords, they would all be hashes of the passwords and not the actual passwords. Because hash algorithms are one direction, the attacker would not be able to get the passwords from the hashes. Another hash use example: <br></br>One day you wake up and realize that Windows 10 is spyware, and decide to download the Ubuntu version of Linux from www.ubuntu.com FTP (File Transfer Protocol) is not known for being very secure, and you should really be using FTPS (FTPS SSL, which uses TLS) instead. But you go for it anyway, living life on the edge, and decide to download via FTP. You click the "start download" button and it begins transferring to your computer. When it arrives, you want a way to check and make sure there is no data missing. Or, worse, if it was intercepted along the way and had a small backdoor placed inside the code. Luckily Ubuntu provides a hash of the file you are downloading:
            <Img  fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>This might seem a tad confusing at first, don't worry.
            </p>
                  </p>
                  <p>You can tell the Ubuntu has used the SHA256 hashing function, which is very popular, to create a hash of the entire Ubuntu download file. Once the file finishes downloading, you can also the SHA256 hashing algorithm on it to produce a hash of the download. Hashing algorithms will output the exact same hash when fed exactly the same input. So your hash should match the hash from the Ubuntu websites. "c0d025e560d54434a925b3707f8686a7f588c42a5fbc609b8ea2447f88847041" is the hash. If even one single bit of the file was missing, changed, or corrupted during transport, the SHA256 hashing algorithm would produce a completely different hash. If the hashes matched, you have just verified the integrity of the data.</p>

                  <p>Remember, hashing algorithms don't have passwords/keys. Everyone has the exact same hashing algorithms, you feed them a piece of data and they create the hash of it. Given the same input, the hashing function will output the same hash no matter what.</p>

                  <h3>Common hashing algorithms</h3>
                  <p>The CompTIA has deemed MD5, SHA, HMAC, and RIPEMD as the ones you need to memorize.</p>
                  <h3>SHA: Secure Hashing algorithm</h3>
                  <p>Provides integrity through hashing. SHA is seen all over, such as in the example with Ubuntu we just used. The National Institute of Standards and Technology (NIST) has cleared SHA as being good enough for official US Government US. NIST is on the CompTIA objectives list, I am not tossing all these acronyms around for fun. There are four versions of SHA. SHA-0, SHA-1, SHA-2, and SHA-3.<br></br>
                  SHA-0 apparently had a massive flaw, and the NIST pulled it very fast and replaced it with SHA-1. <br></br>SHA-1 is a 160-bit hash, designed by our friends at the NSA. Some flaws were discovered and it is no longer considered secure or approved for most uses.<br></br>
                  SHA-2 has a two versions, SHA-256, and SHA-512. SHA-256 produces 32-byte words and SHA-512 produces 64-bye words. The NSA was again involved in creating these. Just to make it even more confusing, SHA-2 can also have truncated versions. SHA-224, SHA-384, SHA-512/224, SHA-512/256. <br></br>
                  <br></br>
                  SHA-3 arrived in 2015, and was picked from a public competition this time, and not the NSA. It has the same hash lengths as SHA-2.

                  </p>

                  <h3>MD5: Message Digest 5</h3>
                  <p>Provides integrity through hashing. There is also an MD4, MD2, and a new MD6. MD4 and MD2 are really bad choices. MD5 is also not a good choice, and is not considered fit for serious use. Even so, in 2020, it is apparently in widespread use. <br></br>
                  MD5 produces a 128-bit hash value. The main issue with MD5 are hash collisions. This is when two different pieces of data fed to the algorithm both produce the exact same hash.
                  </p>

                  <h3>HMAC: Hash-based Message Authentication Code</h3>
                  <p>This one is more complicated, and is a combination of a hash algorithm (such as SHA or MD5) and a symmetric encryption key used together to produce hash. It provides both integrity (through hashing),and authentication(through symmetric shared encryption keys). Normal hashing only provides integrity. In theory if someone intercepted a file you were sending with an attached hash off it, they could modify the file, hash that file, and replace the original hash with the new one. You would receive the file and run the hash, and assume everything was good because the hash matched. HMAC solves this by using a shared secret key in combination with the hashing algorithm to run the data through it and create a hash. Only you and the person you are sending/receiving files from should have that secret key. If your file was intercepted, modified, and a new hash attached, when you received the file it and used your hashing algorithm and the secret key, the hashes would not match. The secret key in combination with the data and the hash algorithm produces a different hash than just the data and hashing algorithm. </p>
                  <p>The secret key is generated during the initial key exchange. For example, if RSA is being used to setup the symmetric keys, something called a "key derivation function" would create another set of symmetric keys from the first pair. One set would be used to encrypt the message, the other pair used as the HMAC secret used with the message data and hashing algorithm to create a hash. The hashing algorithm used in conjunction with secret key and data to produce the hash can be pretty much any hashing you want. SHA1, MD5, SHA512. HMAC using SHA256 for the hashing algorithm would be Written out as HMAC-SHA256, for example. </p>

                  <p>TLS (Transportation Security Layer) uses HMAC. HTTPS uses TLS, so basically anytime you are browsing the web you are likely using HMAC in the background without even knowing it. TLS replaced SSL (Secure Sockets Layer) which used MAC (Message Authentication Code) instead of HMAC. TLS is much more secure with HMAC. TLS can use RSA, DH, DHE, ECDH, and more, as the asymmetric algorithm for exchanging shared symmetric keys. HMAC would use a key derivation function to produce another set of shared symmetric keys from this. Complicated?</p>

                  <h3>RIPEMED: Ripe Message Digest</h3>
                  <p>Provides integrity. Another hash function, there are five versions: RIPEMD, RIPEMD-128, RIPEMD-160, RIPEMD-256, and RIPEMD-320. The first two are not considered secure at all. RIPEMD-256 and RIPEMD-512 are also not secure. RIPEMD-160 is the real winner here. SHA and MD5 are much more widely used, but RIPEMD-160 is sometimes seen. Remember that only RIPEMD-160 is considered secure.</p>
                  <h3>Real world</h3>
                  <p>Hashing goes on in the background without the user normally even being aware of it. If you are reading this website, your computer is using hashing to verify the integrity of the data being sent. The Ubuntu example where you actually see the hash is more rare, but some sites do offer it.</p>

                  <h3>Wrap up</h3>
                  <p>Hashes are used to provide integrity, proof the data has not been changed. Hashing algorithms are one way functions. SHA, MD5, and RIPEMD are hashing algorithms. HMAC is a combines a hashing algorithm with a shared private key to produce hashes that provide integrity and authentication. You will need to know which hashes are stronger. For example, MD5 is weaker than SHA-256.</p>


<Img  fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/6group1">Previous: Encryption algorithms</Link> <Link style={{ float: `right`}} to="/sosalty">Next: Salting </Link>
    </Layout>
)
export default Chap

export const query = graphql`
  query {
   front: file(relativePath: { eq: "hash.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "ubuntuhash.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "61a1.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front4: file(relativePath: { eq: "42mschap.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  

  }
`