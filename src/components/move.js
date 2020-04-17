import React from "react"

import Shockedp from "../images/high.jpg"
import AniLink from "gatsby-plugin-transition-link/AniLink";



const ListLink = props => (
    
        
        <AniLink cover bg={`

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
export default ListLink


// const Move = (props) => {



//     return (

//         <ul style={{ listStyle: `none`, float: `right`, color: `#6246ea` }} className={Main.linkc}>
//                 <ListLink to="/" style={{  color: `#6246ea` }} >Home</ListLink>
                
//                 <ListLink to="/identityandaccessmanagement" className={Main.linkc} >4.0</ListLink>
//                 </ul>
//     )
// }

// export default Move