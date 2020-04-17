import React, { useState } from 'react'
import Style from "./navbar.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Shockedp from "../images/high.jpg"
import classNames from "classnames"




const Navlink = props => (
   


    
        
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



function Navbar() {
    const [navnames, setNavnames] = useState(false)
   let myanswer = function() {

   }
    

    return (
        <div className={Style.container}>
        <h3><Navlink style={{ display: `inline-block`, marginRight: `1rem` }} to="/">GRIND</Navlink></h3>
        <nav className={`${Style.mobile} ${navnames ? Style.showmenu : Style.hidemenu} `}>
            <ul>
                <li ><Navlink to="/">{navnames}</Navlink></li>
                <li><Navlink to="/">GRIND</Navlink></li>
                <li ><Navlink to="/">GRIND</Navlink></li>
                <li ><Navlink to="/">GRIND</Navlink></li>
            </ul>
        </nav>

        <button className={Style.navbutton} onClick={() =>  setNavnames(!navnames)}>
            <span className={`${Style.navspan} ${navnames ? Style.animate : null} `}></span>
        </button>
        </div>
    )
}

export default Navbar