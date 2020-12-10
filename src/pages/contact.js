import React from 'react'
import { Link } from 'gatsby'

const ContactPage = () => {
    return (
        <div>
            <h1>Contact us</h1>
            <p>John Doe</p>
            <p>test@domain.tld</p>
            <p>123-123-1234</p>
            <p>Follow me on <Link to="https://twitter.com/funnyoneliners?lang=en">twitter</Link></p>
        </div>
    )
}

export default ContactPage