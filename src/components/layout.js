import React from "react"
import Navbar from "./navbar"
import Header from "./header"
import Footer from "./footer"



const Layout = ({ children }) => {

    

    return (

        
        <React.Fragment style={{ minHeight: `100%`}}>
           <Navbar />
    <div style={{ margin: `0 auto`, maxWidth: 800, padding: `1rem 1rem`, }}>
        
        
        {children}

        
    </div>
    <Footer />
   
   
  </React.Fragment>

    )
  
    
}

export default Layout