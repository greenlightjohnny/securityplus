import React from "react"
import Main from "../components/mainstyle.module.scss"
import Shockedp from "../images/relong2.jpg"
import AniLink from "gatsby-plugin-transition-link/AniLink";



const Goleft = (props) => (
    
        
        <AniLink cover direction="up" bg={`

    url(${Shockedp})
    center / cover   /* position / size */
    no-repeat        /* repeat */
    fixed            /* attachment */
    padding-box      /* origin */
    content-box      /* clip */
    white            /* color */
  `}  to={props.to}>

{props.children}
</AniLink>

    
)






const Move = (props) => {



    return (

      
               <Goleft to={props.to} style={{  color: `#6246ea` }} >{props.children}</Goleft>
                
                
              
   )
 }

 export default Move