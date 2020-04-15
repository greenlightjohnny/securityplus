import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Chap = props => (
    <Layout>
        <h1>Key Stretching Algorithms </h1>
        <i>"In cryptography, key stretching techniques are used to make a possibly weak key, typically a password or passphrase, more secure against a brute-force attack by increasing the resources (time and possibly space) it takes to test each possible key. Passwords or passphrases created by humans are often short or predictable enough to allow password cracking, and key stretching is intended to make such attacks more difficult by complicating a basic step of trying a single password candidate. " <br></br> -<a href="https://en.wikipedia.org/wiki/Key_stretching">Wikipedia</a> </i>

        <h3>Hashing vs Salting</h3>
        <p>Key stretching can be done by either hashing the password multiple times, or by salting the password and than encrypting it. A combination of these can also be used. Salting appends a long random string to the password before hashing, and helps protect against rainbow table attacks. PBFKDF2 and bcrypt are two key stretching algorithms. </p>
        

        <h3>Hash or encrypt</h3>
        <p>Key stretching are techniques used to make weak password/key better able to resist brute force attempt password cracking attempts. It does this by using a key stretching program to hash or encrypt the password, sometimes repeatedly, and stores that result. When the user logs on and enters there password, the Key stretching algorithm runs the exact same algorithm on it and checks to see if it matches the stored hash/encrypted password. So how does this help?</p>

        <h3>Speed matters</h3>
        <p>It might take your computer .01 seconds to check and see if your password matches the one stored in the database. If your computer stores it as a hash instead, it first has to calculate the password you entered into a a hash and check that against the hash of the stored password. This might take .08 seconds. With Key stretching, instead of just storing the password in plaintext or with a simple one time hash, the password is hashed, and the hash is hashed, and so on. This tikes more computer resources and time, maybe .5 seconds instead of .05 seconds. For the user, they don't even notice this when they log in, and the only have to do it once. For the attacker trying to brute force the password, this slows them down an incredible amount. Instead of being able to test 20 passwords in one second, they can now only test 2, since the multiple hashing requires computation power to perform. These examples are purely hypothetical, and in real life the speeds are probably much faster.  </p>

        <h3>bcrypt</h3>
        <p>Based on the awesome Blowfish symmetric block cipher, bcrypt first salts the passwords and then encrypts it with the blowfish cipher. This process can be repeated however many times you want, making it somewhat future resistant. As computer processing power increases, bcrypt can simply increase the number of times it repeatedly salts and encrypts the password, making it slower to brute force. After bcrypt finishes, the result is a 60 character string </p>

        <h3>PBFKDF2: Password-Based Key Derivation Function 2</h3>
        <p>Instead of encrypting like bcrypt, PBFKDF 2 uses a pseudo-random hashing function on the password after salting it. For example SHA or MD5. It can than repeatedly hash the resulting hash. Kerberos recommended running it 4096 times in 2005. Others recommended 100,000 times. And computers are much more powerful now. The final result is called the "derived key". Anytime the user logs on, their password has to go through the same process to see if the result matches the derived key.</p>

        <h3>Wrap up</h3>
        <p>Key stretching makes it harder to brute force guess passwords. Salting makes it harder to use rainbow table attacks. Two key stretching programs are bcrytp and PBFKDF2. bcrypt uses salting and the Blowfish block cipher. PBFKDF2 uses a salting and a random hashing function. Both can be run multiple times, and increase the amount of time it takes for an attacker to brute force passwords.Remember that salting is adding random data to passwords before storage to make rainbow table attacks harder. </p>

<Img  fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/hashing">Previous: Hashing algorithms</Link> <Link style={{ float: `right`}} to="/obfuscation">Next: Obfuscation</Link>
    </Layout>
)
export default Chap

export const query = graphql`
  query {
   front: file(relativePath: { eq: "61rkey.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
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

      front4: file(relativePath: { eq: "62rs.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  

  }
`