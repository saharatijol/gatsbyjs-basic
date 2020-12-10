import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <div>
            <Link to="/"> Home | </Link>
            <Link to="/about"> About | </Link>
            <Link to="/contact"> Contact | </Link>
            <Link to="/blog"> Blog | </Link>
        </div>
    )
}

export default Header