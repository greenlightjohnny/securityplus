import React from "react";
import { Link } from "gatsby"
import Main from './mainstyle.module.scss'
import useDarkMode from 'use-dark-mode';



const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
    
)


const Header = ()=> {
    const darkMode = useDarkMode(false);

    return (

        <header className={Main.header}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, }}><h3 style={{ display: `inline`, color: `#6246ea`}}>GRIND</h3></Link>

            <ul style={{ listStyle: `none`, float: `right`, color: `#6246ea` }} className={Main.linkc}>
                <ListLink to="/" style={{  color: `#6246ea` }} >Home</ListLink>
                
                <ListLink to="/identityandaccessmanagement" className={Main.linkc} >4.0</ListLink>
                <div>
      <button className={Main.lightbutton} type="button" onClick={darkMode.disable}>
        ☀
      </button>
     
      <button className={Main.darkbutton} type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
                <div>
      
    </div>
            </ul>
            
        </header>
    )

    
}

export default Header