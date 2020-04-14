import React from "react"
import { Link } from "gatsby"
import Main from './mainstyle.module.scss'
import useDarkMode from 'use-dark-mode';

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
    
)


const Layout = ({ children }) => {

    const darkMode = useDarkMode(false);

    return (

        
        <div>
    <div style={{ margin: `0 auto`, maxWidth: 800, padding: `1rem 1rem`, }}>
        <header style={{ marginBottom: `1.5rem`}}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, }}><h3 style={{ display: `inline`, color: `#6246ea`}}>GRIND</h3></Link>

            <ul style={{ listStyle: `none`, float: `right`, color: `#6246ea` }} className={Main.linkc}>
                <ListLink to="/" style={{  color: `#6246ea` }} >Home</ListLink>
                
                <ListLink to="/identityandaccessmanagement" className={Main.linkc} >4.0</ListLink>
                <div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
     
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
                <div>
      
    </div>
            </ul>
            
        </header>
        
        {children}

        
    </div>
   
    <div className={Main.filler}>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon class="svg--sm" fill="##181d22" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
      <polygon class="svg--lg" fill="#181d22" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
    </svg>
  </div>
  
  <footer className={Main.footer}>No pop ups. No cookies. No ads. <br></br>We don't do those.<br></br>
    Meme quality not guaranteed. </footer> 
  </div>

    )
  
    
}

export default Layout