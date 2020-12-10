import React from 'react'

// grabbing this from gatsby npm module, its already installed and listed out as our dependencies
// Link is a react component that does the optimization of page loads.
// It preloads the page content you are heading to, hence the seamless page load
import { Link } from 'gatsby'

// Notes: In site creation, src/pages directory is where gatsby looks when its figuring out which static pages your site needs

// Create react component for the page as a stand-alone function
const IndexPage = () => {
    return (
        <div>
            <h1>Hello.</h1>
            <h2>This is a test. I should see this</h2>
            {/*<p>Need a developer? <a href="/contact">Contact Me</a></p>*/}

            {/*Gatsby Way of linking*/}
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </div>
    )
}

// Ensure this component is exported. Necessary for the page to render
export default IndexPage