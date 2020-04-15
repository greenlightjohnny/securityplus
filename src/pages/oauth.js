import React from "react"
import Info from "../components/info"
import Layout from "../components/layout"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Oauth = props => (
    <Layout>
      <Info title="OAuth" description="OAuth is free for consumers, which means you are the product. It lets you share data between apps easily, so that your data can be sold. Always fun." />
        <h1>OAuth</h1>
        <Img style={{maxWidth: 300 }} fluid={props.data.front.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>"An open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications." <br></br> -https://oauth.net/
            </p>

            <h3>No authentication, authorization only</h3>
            <p>Of the entire 4.2 list of identity and access services, there is only one that can't provide authentication. You guessed it, OAuth. OAuth is only concerned with authorization. This makes OAuth the perfect target for trick questions, stay on your toes people! </p>
            <p>OAuth is basically for allowing a user which has an account with an OAuth provider to share information from that account with a third part application/website, without giving the third party access to your account password. OAuth will issue tokens to the third party for your account if you tell it to, which will allow the third party to access some of your account information for a set period of time. </p>
            <p>OAuth is a pretty new tech, only created in 2006. OAuth 2.0 came out in 2012 and is supported by Facebook. Microsoft also supports it. Google got on board the train as well, and currently recommends OAuth 2.0 as the authorization for all its APIs.</p>
            <Img  fluid={props.data.front2.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>Here is an example of a fictional OAuth request to someone's FitBit account. Maybe it is another fitness app you downloaded and want to important your logs into. Before FitBil lets the third party app see your data, it asks you if you want to allow it. If you choose allow, the FitBit OAuth server will send the third party app a token, which is good to access only the data the user allowed, and only for a set period of time. The third party app never gets the FitBit account password.
            </p>
            <p>Remember, OAuth is good for authorization to share information between two separates apps that you already have accounts on. It does not provide SSO, the ability to use one apps credentials to sign onto the other with.</p>
            <h3>OAuth real world</h3>
            <p>You will see OAuth a ton, on both mobile devices and desktops. Anytime you install an app you will often get a pop saying that that app needs your permission to access a bunch of things on your phone/from another app. Install a simple game on your phone, and sometimes you get crazy requests from it. </p>
            <Img  fluid={props.data.front3.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}>This is the world we now live in.</p>
            <p>It is a good idea to review permissions before accepting them, and often you can un-check a bunch of permissions and still have the app work. Most people don't check, so the apps just ask for anything they can get. This can not only be a security risk, but seriously slow your phone and drain your battery as your apps upload as much of your data as they can get for everything you do.</p>

            <h3>OAuth vs ....?</h3>
            <p>OpenID Connect was built on top of OAuth, and provides authentication services along with authorization. It can be used for SSO, while OAuth can not be used to sign onto different third party apps, only share information between them. OpenID Connect can be used to sign on to third party apps using a different account, and share information from that account with the third party. Both OAuth and OpenID Connect have seen widespread adaption.</p>

            <h3>Security concerns?</h3>
            <p>Using OAuth one should keep in mind that it can be a security risk. Maybe you don't want your GPS geolocation meta data shared with a third party fitness app. Who knows who they will sell it to later as anonymous data? Is it really anonymous data if you live in the country and are the only house for miles around? Now anyone who knew your address could overlay the GPS data with a map of your area, and find out what phones were active. Pretty easy to see it is you jogging from your house each morning, and from there they have ALL your GPS data and can retrace your exact location for as big as their set of data is. Maybe it was a month worth of data for example. Now they have your every step for the past month, including your visit to a local strip club. Great blackmail material.</p>
            <p>Think that is un-realistic? Think again, it has already been done. The New York Times got their hands on some "big data", allegedly anonymous data sets sold to "trusted" venders from companies like Facebook and Google. This data contained geolocation files, among other things, of millions of phones along with timestamps. Your phone is likely tracking you down to a few feet, all day long. And this data was used by the New York Times to identity individuals, including high ranking Pentagon officials, and see exactly where they go and and what times. <br></br> 
              <a href="https://www.bloomberg.com/features/2018-palantir-peter-thiel/">Palantir knows everything about you</a>
            </p>
            <p> For me this is a huge national security concern. Imagine if the Chinese were able to get their hands on some of this data. Heck, they even have Chinese developed apps on US phones that do the job for them, Tik-Tok for example. Finding individuals at corporations who were good blackmail targets would be easy. Look at their GPS data, discover a weird pattern, get evidence, and threaten to reveal it to their family unless they hand over some "small" trade secrets. Even just using the data to see where employees at targeted corporations lived, and physically installing bugs and/or spyware on their home network, is a huge risk. You might know that a certain section off a large building does extremely sensitive work, but have no idea which employees to target because it is just a few out of a thousand. With GPS geolocation data, you could know exactly who works in that part of the building, and following the GPS data to see where they went home to and the end of the day.</p>

            <h3>Real risks</h3>
            <p>Instead of educating users on the danger of applications sharing data, such as OAuth, the CompTIA Security+ exam thinks your time is better spent memorizing port numbers. Apparently OAuth can make things more secure, since there are now less passwords to be remembered and written down, and less websites storing user passwords. Another factor probably is that the US intelligence community has their own direct pipelines into all the data from Facebook, Google, Apple, and Microsoft and that data is incredibly useful to them. There is no backlash from the government when these companies are discovered illegal using the data from users, because the US government gets that data from them. The problem is when they sell it to third parties as anonymous meta data. Enough meta data and you can find anyone. allegedly the companies they sell it to are trusted, however it just takes one big leak and everyone will have their GPS meta data available for all to see and potentially abuse.</p>

            <h3>Wrap up</h3>
            <p>OAuth is used to share your data on an account you have on one app, with a separate account on another app. It provides authorization to share your data, not authentication.</p>

            <Img fluid={props.data.front4.childImageSharp.fluid} />
            <p style={{ fontStyle: `italic`, fontSize: `.8rem`}}></p>
          
        


<Link to="/openidconnect">Previous: OpenID Connect</Link> <Link style={{ float: `right`}} to="/pap">Next: PAP</Link>
    </Layout>
)

export default Oauth


export const query = graphql`
  query {
   front: file(relativePath: { eq: "oauth.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "fitbit.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    front3: file(relativePath: { eq: "neo.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front4: file(relativePath: { eq: "42oauth.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }


  

  }
`