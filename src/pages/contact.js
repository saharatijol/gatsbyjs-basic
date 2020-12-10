import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact us</h1>
            <p>John Doe</p>
            <p>test@domain.tld</p>
            <p>123-123-1234</p>
            <p>Follow me on twitter <Link to="https://twitter.com/funnyoneliners?lang=en">@funnyoneliners</Link></p>
        </Layout>
    )
}

export default ContactPage