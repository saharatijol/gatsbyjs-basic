import React from 'react'

// Notes: In site creation, src/pages directory is where gatsby looks when its figuring out which static pages your site needs

// Create react component for the page as a stand-alone function
const IndexPage = () => {
    return (
        <div>
            <h1>Hello.</h1>
            <h2>This is a test. I should see this</h2>
        </div>
    )
}

// Ensure this component is exported. Necessary for the page to render
export default IndexPage