import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/footer'
import Header from '../components/header'

const ContactPage = () => {
    return (
        <div>
            <Header/>
            <h1>Contact us</h1>
            <p>John Doe</p>
            <p>test@domain.tld</p>
            <p>123-123-1234</p>
            <p>Follow me on twitter <Link to="https://twitter.com/funnyoneliners?lang=en">@funnyoneliners</Link></p>
        <Footer/>
        </div>
    )
}

export default ContactPage