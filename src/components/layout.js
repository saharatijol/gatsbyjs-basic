// Here, we're creating a single-page layout component that we can
// easily use to create a new page
// for few lines of code

import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyle from './layout.module.scss'


const Layout = (props) => {
    return (
        <div className={layoutStyle.container}>
            <div className={layoutStyle.content}>
                <Header/>
                {/*this is the JSX passed in */}
                {/*where you place the unique content*/}
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout

