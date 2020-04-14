import React from "react"
import { Link } from "gatsby"
import Main from './mainstyle.module.scss'
import Dark from "./darkmode.js"
const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
    
)
export default ({ children }) => (
    <div>
    <div style={{ margin: `0 auto`, maxWidth: 800, padding: `0 1rem`, }}>
        <header style={{ marginBottom: `1.5rem`}}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, }}><h3 style={{ display: `inline`, color: `#6246ea`}}>GRIND</h3></Link>

            <ul style={{ listStyle: `none`, float: `right`, color: `#6246ea` }} className={Main.linkc}>
                <ListLink to="/" style={{  color: `#6246ea` }} >Home</ListLink>
                
                <ListLink to="/identityandaccessmanagement" className={Main.linkc} >4.0</ListLink>
                <Dark />
            </ul>
            
        </header>
        
        {children}

        
    </div>
    <footer className={Main.footer}>No pop ups. No cookies. No ads. <br></br>We don't do those.<br></br>
    Meme quality not guaranteed. </footer>
    </div>
) 