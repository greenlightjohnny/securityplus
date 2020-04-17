import React from "react";
import Main from './mainstyle.module.scss'



const Footer = () => {

    return (
        <div className={Main.footersticky}>

    <div className={Main.filler}>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon className="svg--sm" fill="##181d22" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
      <polygon className="svg--lg" fill="#181d22" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
    </svg>
  </div>
  
  <footer className={Main.footer}>No pop ups. No cookies. No ads. <br></br>We don't do those.<br></br>
    Meme quality not guaranteed.<br></br> 
    No copyright (we're the infringers).
    </footer> 
  </div>
    )

}

export default Footer