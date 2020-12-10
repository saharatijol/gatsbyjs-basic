import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby' // allows you to perform a graphql query
//import './header.module.scss'

// headerStyles becomes an object to apply it directly to the class link
import headerStyles from './header.module.scss'


const Header = () => {
    // template literal to use graphql api to pull data and query it
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <h1>
            <Link className={headerStyles.title} to="/">
                {data.site.siteMetadata.title}
            </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header