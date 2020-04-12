import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Chap = props => (
    <Layout>
        <h1>PSK, Open, Enterprise, WPS, Captive portals</h1>
        <i>"Created by the Wi-Fi Alliance and introduced in 2006, the goal of the protocol is to allow home users who know little of wireless security and may be intimidated by the available security options to set up Wi-Fi Protected Access, as well as making it easy to add new devices to an existing network without entering long passphrases." <br></br> -<a href="https://en.wikipedia.org/wiki/MS-CHAP">Wikipedia</a> </i>
        <h3>PSK, Open, Enterprise</h3>
        <p>When you connect to the internet via WAP or WPA2 you will be using one of these modes. Open mode means you don't have to enter in an password, or username and password to connect to that WiFi network. You just click on it and bam, there you are. Of course you might only have access to a single website, the captive portal, until you do something such as agree to terms, pay money, or enter in a username and password. The difference is you ARE connected to the network, you are just being limited as to what you can access by the captive portal. When looking at WiFi networks on your device, if there is no padlock symbol or it says "open" it generally means it is in open mode. Shocking stuff.
        <Img  fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>You can see one open network in the above photo.
            </p>
        </p>
        <p>PSK (Pre-Shared Key) mode is probably the most common. WPA-PSK and WPA2-PSK are widespread in home and small office use. If you have WiFi at your house, it is probably running in PSK mode. The PSK is basically just the password to log on to the WiFi with. Nothing else is needed, you just enter the PSK and connect. The same PSK is used by everyone, so it does not really provide authentication. There is no way to tell who has logged on, or how many people know the password<Img  fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Here is a the log on screen for a device trying to connect to a WAP that is using WPA2-PSK. Not that it only asks for the password, which is the PSK.
            </p></p>
            <p>Enterprise mode is the most complicated, and most secure. WPA-Enterprise and WPA2-Enterprise follow the 802.1x standard for authentication, which requires a remote authentication server. Enterprise mode authenticates the client/user/device that tries to connect to the LAN. It does not use a PSK, instead you are normally asked for a username and password. These are sent to the the remote authentication server, usually a RADIUS server, for authentication. 802.1x was covered a few lessons back. WPA/2-Enterprise mode is sometimes called WPA/2-802.1x. Just remember that Enterprise mode is the most secure, and requires a remote authentication server. Normally seen in a corporate setting, because of the additional cost and complexity of setting up the remote authentication server, as well as ease of use.
<Img  fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Here WPA2-Enterprise mode wants your username and password.
            </p></p>

            <h3>WPS: Wi-Fi Protected Setup</h3>
            
            <i>"Created by the Wi-Fi Alliance and introduced in 2006, the goal of the protocol is to allow home users who know little of wireless security and may be intimidated by the available security options to set up Wi-Fi Protected Access, as well as making it easy to add new devices to an existing network without entering long passphrases." <br></br> -<a href="https://en.wikipedia.org/wiki/Wi-Fi_Protected_Setup">Wikipedia</a> </i>
            <p>This was a huge fudge up from the very start. WPS had a few different methods, including a button on the back of the WAP that you could push to open the network up to anyone to automatically connect and authenticate to for a set time frame. Even worse, it came with a PIN usually as a sticker on the WAP. This could be used as the PSK. The problem was, it was just numbers and very short. Turned out you could brute force crack the PIN within a few hours. Madness anyone thought this was a good idea. There was also an NFC (Near-field Communication) method which was optional. Needles to say, WPS a huge security risk and should be disabled.<Img  fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Anyone with physical access to your WAP could press this button for access. Lovely.</p>
            <h3>Captive portals</h3>
            <p>These allow you to connect to the WiFi network, but your access is only to a single website, the captive portal. This is super common to see, Starbucks uses it, for example. It might ask you to click an agree to terms button, or enter a username and password. Some captive portals even require payment. All of them won't let you have internet access until you perform some kind of action. The difference between a captive portal login and a PSK or Enterprise login, is that the PSK and Enterprise block ALL access to the network until you are verified. Captive portals operate in Open mode, allow you to connect to the network, but restrict and redirect all traffic to the captive portal.
            <Img  fluid={props.data.front5.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            <Img  fluid={props.data.front6.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>
            </p>
            </p>
            </p>

            <h3>Wrap up</h3>
            <p>This stuff is easy. Start looking at WiFi networks when you are out, and see what modes they are running.</p>
<Img  fluid={props.data.front7.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>
            </p>

<Link to="/radiusfederation">Previous: RADIUS Federation</Link> <Link style={{ float: `right`}} to="/cryptography">Next: 6.3</Link>
    </Layout>
)
export default Chap

export const query = graphql`
  query {
   front: file(relativePath: { eq: "mschapwi.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "ex5.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "ex4.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front4: file(relativePath: { eq: "wps.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }


front5: file(relativePath: { eq: "captive3.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front6: file(relativePath: { eq: "captive.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }



      front7: file(relativePath: { eq: "63a7.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  

  }
`