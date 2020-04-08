import React from "react"

import Layout from "../components/layout"
import Styles from "./id.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Diameter = props => (
    <Layout>
        <h1>Diameter</h1>
        <p>So Diameter is actually not on the 4.2 list, but it should be. Keeping this short, Diameter was designed as a replacement for RADIUS. It's another TCP/IP suite protocol that provides AAA for computers on a network. It uses TCP and SCTP instead of UDP, and interestingly enough offers no built in encryption. Diameter relies on other protocols, such as IPsec, to be safely used.</p>
        <Link to="/radius">Previous: radius</Link> <Link style={{ float: `right`}} to="/tacacs">Next: TACACS+</Link>
    </Layout>
)

export default Diameter