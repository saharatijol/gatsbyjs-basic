
// Generate slug field - tap into node internal APIs
// Check out API Reference from Gatsby docs - Gatsby Node APIs

// this function runs when a new node is created
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        console.log(JSON.stringify(node, undefined, 4))
    }
}