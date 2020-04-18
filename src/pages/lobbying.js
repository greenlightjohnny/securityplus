import React from 'react';
import Img from "gatsby-image"
import Layout from '../components/layout'
import { graphql } from "gatsby"


const About = (props) => (


    <Layout>
        <h1>Lobbying</h1>
        <p>In a shocking development, it recently came to light that the CompTIA was working behind the scenes in Washington DC lobbying against a "right to repair bill".</p>

        <h3>Only Vendor Certified Repairs</h3>
        <p>Despite being a "vendor neutral" certification organization, the CompTIA somehow decided it was a good idea to lobby against this. Apparently they think it is a "security risk" and some repairs can be "complicated and dangerous". You can read it all <a href="https://www.capitol.hawaii.gov/Session2020/Testimony/SB2496_TESTIMONY_CPH_02-06-20_.PDF">here</a> on paperwork submitted to the Hawaii State Government.  Keep in mind they are talking about cell phones and computers, and have a good laugh.
        <Img fluid={props.data.front4.childImageSharp.fluid} />
        </p>

        <h3>Louis Rossmann</h3>
        <p>
          A true hero of the people, Louis Rossmann did an amazing job covering this story. Louis runs an independent repair shop in NY. Large corporations have the resources to have full time lobbyists in DC, spinning their version of things to the government. Small businesses don't have the resources for this, and as a result their side is often not heard. Louis actually goes and testifies in opposition, and posts <a href="https://www.youtube.com/watch?v=Y9JKRItHDME">CompTIA lobbying</a> videos which would otherwise never be seen. A true hero of the people. Louis has a Patron account if you want to help him out with a small donation <a href="https://www.patreon.com/rossmanngroup">here</a>. Louis also posts on Reddit under the username <a href="https://old.reddit.com/user/larossmann">larossman</a> and has some excellent incite into the situation. While you are at it, give his amazing YouTube <a href="https://www.youtube.com/channel/UCl2mFZoRqjw_ELax4Yisf6w">channel</a> a follow to give the voice of the people some more weight.
          
        </p>

        <h3>Caught</h3>
        <p>After getting caught red handed the CompTIA stepped back from arguing that your phone could blow up while being repaired unless it was performed at a vendor certified shop, and for YOUR safety it should not be allowed.</p>
        <Img fluid={props.data.front2.childImageSharp.fluid} />

        <h3>Questions Arise</h3>
        <p>How much money did the CompTIA spent lobbying? Whose interests did they have in mind? The nonprofit <a href="https://projects.propublica.org/nonprofits/organizations/61058206" > 990 CompTIA </a> tax filing should tell us:
        <Img fluid={props.data.front3.childImageSharp.fluid} />
        </p>
        <p>$0 spent lobbying? What is this madness? There is literally a video of a CompTIA lobbyist telling Government officials that we need to be protected from our phones blowing up while working on them! Maybe the lobbyist was just a good samaritan working pro bono?</p>
    
        <h3>Digging Deeper</h3>
        <p>Looking through the CompTIA's 2018 990 nonprofit tax exempt form discovered some interesting items. For example, the CompTIA made around 55 million from giving certification tests, and only around 3 million in membership dues from corporations. So why were they lobbying for the their corporate members, instead of the people they make the vast majority of their money from?
        <Img fluid={props.data.front5.childImageSharp.fluid} />
           </p>

           <h3>73 Million in Revenue!</h3>
           <p>Wow, that is a ton of money! Lucky for us the CompTIA is a nonprofit and will surely put all that extra money to good use! There is no way they could spend 73 Million just for salaries, test administration/development, and operating costs. They are probably running a chain of kitten orphanages. Let's take a look at the expenses:
           <Img fluid={props.data.front11.childImageSharp.fluid} />
           
           </p>

           <h3>16 Million in Test Administration/Development</h3>

           <p>Alright, seems a little bit high, but that still leaves the CompTIA with over 50 million for salaries and operating costs. As a nonprofit they probably pinch pennies and keep those costs low, leaving them with lots of money for charitable work. 

           <Img fluid={props.data.front6.childImageSharp.fluid} />
           </p>


           <h3>78 Million in Expenses!?!?!</h3>
           <p>Well they could have save just a little bit! Wonder how they spent it? Wisely I am certain.
           <Img fluid={props.data.front7.childImageSharp.fluid} />
           <Img fluid={props.data.front8.childImageSharp.fluid} />
           <Img fluid={props.data.front9.childImageSharp.fluid} />
           <Img fluid={props.data.front10.childImageSharp.fluid} />
           </p>

           <h3>Peace, I'm OUT</h3>
           <p>At this point the CompTIA exists basically just to serve itself. They spend under 3 million on test development, and somehow about double that for conferences and associated travel. Over 4 million paying just the top executives alone. Think about that, they spent more on executive pay than they did working on test development. If you ever wonder why the exams feel outdated, there is your answer.</p>
           <p>24 million in employee compensation. Exactly how many people do they have working for them? If these people are not involved in test development, what exactly are they doing? </p>
           <p>The CompTIA lists 500k for "office expenses" and over 2 million for "Information technology". Let me tell you, that buys a ton of paper, pens, and laptops. It's hard to say how much of this is legit without knowing how many employees they actually have. What we do know is that the CompTIA apparently spends very little actually developing the tests.</p>

           <p></p>

           <h3>Who Paid the Lobbyists?</h3>
           <p>I still don't know where the money to pay the lobbyists came from. The CompTIA claims 0 was spent for lobbying on the 990, so it leaves you to wonder how they filtered the money down to them. When you have a lobbyist introducing himself as representing the CompTIA, and CompTIA letterhead on documents submitted to the US Government, why does that nonprofit claim 0 was spent on lobbying on their 990?</p>

           <h3>CompTIA Member Services, LLC</h3>
           <p>There is a record of a <a href="https://projects.propublica.org/represent/lobbying/search?search=comptia+AND+member+AND+services">CompTIA Member Services</a> hiring lobbying firms. How the CompTIA actually paid them is a mystery, along with why they are an LLC.</p>

        <div><Img fluid={props.data.front.childImageSharp.fluid} />
        <i>https://www.comptia.org/newsroom/2020/02/21/comptia-steps-back-from-lobbying-activity-related-to-right-to-repair-legislation</i>
        </div>
        

    </Layout>
)





export const query = graphql`
  query {
   front: file(relativePath: { eq: "profit.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "caught.png" }) {
      childImageSharp {
       
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front3: file(relativePath: { eq: "spentlobbying.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }


 front4: file(relativePath: { eq: "cellphones.png" }) {
        childImageSharp {
         
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }



 front5: file(relativePath: { eq: "income.png" }) {
  childImageSharp {
   
    fluid(maxWidth: 900) {
      ...GatsbyImageSharpFluid
    }
  }
}




front6: file(relativePath: { eq: "testcost.png" }) {
  childImageSharp {
   
    fluid(maxWidth: 900) {
      ...GatsbyImageSharpFluid
    }
  }
}



front7: file(relativePath: { eq: "promo.png" }) {
  childImageSharp {
   
    fluid(maxWidth: 900) {
      ...GatsbyImageSharpFluid
    }
  }
}



front8: file(relativePath: { eq: "lowsal.png" }) {
  childImageSharp {
   
    fluid(maxWidth: 900) {
      ...GatsbyImageSharpFluid
    }
  }
}



front9: file(relativePath: { eq: "grants.png" }) {
  childImageSharp {
   
    fluid(maxWidth: 900) {
      ...GatsbyImageSharpFluid
    }
  }
}
  





front10: file(relativePath: { eq: "exec.png" }) {
  childImageSharp {
   
    fluid(maxWidth: 900) {
      ...GatsbyImageSharpFluid
    }
  }
}



front11: file(relativePath: { eq: "totalexp.png" }) {
  childImageSharp {
   
    fluid(maxWidth: 900) {
      ...GatsbyImageSharpFluid
    }
  }
}
  

  

  }
`


export default About