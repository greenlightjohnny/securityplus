import React, { useState } from 'react'
import Style from "./navbar.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Shockedp from "../images/high.jpg"






const Navlink = props => (
   


    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        
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
    </li>
    
)



function Navbar() {
    const [navnames, setNavnames] = useState('hidden')

  
    
    


    return (
        <div className={Style.mobile}>
        <Navlink to="/">GRIND</Navlink>
        <nav>
            <ul>
                <li><Navlink to="/">{navnames}</Navlink></li>
                <li><Navlink to="/">GRIND</Navlink></li>
                <li><Navlink to="/">GRIND</Navlink></li>
                <li><Navlink to="/">GRIND</Navlink></li>
            </ul>
        </nav>

        <button className={Style.navbutton} onClick={() => setNavnames('hi')}>
            <span className={Style.navspan}></span>
        </button>
        </div>
    )
}

export default Navbar