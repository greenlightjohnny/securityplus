import React from "react"
import Main from "../components/mainstyle.module.scss"
import Shockedp from "../images/relong2.jpg"
import AniLink from "gatsby-plugin-transition-link/AniLink";



const Goright = (props) => (
    
        
        <AniLink cover direction="right" bg={`
        
    url(${Shockedp})
    center / cover   /* position / size */
    no-repeat        /* repeat */
    fixed            /* attachment */
    padding-box      /* origin */
    content-box      /* clip */
    white            /* color */
  `}  to={props.to} style={{ float: `right`}}>

{props.children}
</AniLink>

    
)






const Mover = (props) => {



    return (

      
               <Goright to={props.to}  >{props.children}</Goright>
                
                
              
   )
 }

 export default Mover