// Here, we're creating a single-page layout component that we can
// easily use to create a new page
// for few lines of code

import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = (props) => {
    return (
        <div>
            <Header/>
                {/*this is the JSX passed in */}
                {props.children}
            <Footer/>
        </div>
    )
}

export default Layout

