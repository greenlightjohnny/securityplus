import React from "react"

import Header from "./header"
import Footer from "./footer"



const Layout = ({ children }) => {

    

    return (

        
        <React.Fragment style={{ minHeight: `100%`}}>
           <Header />
    <div style={{ margin: `0 auto`, maxWidth: 800, padding: `1rem 1rem`, }}>
        
        
        {children}

        
    </div>
    <Footer />
   
   
  </React.Fragment>

    )
  
    
}

export default Layout