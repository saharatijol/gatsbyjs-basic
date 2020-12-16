import React from 'react'
import Layout from '../components/layout'
import {graphql, useStaticQuery} from "gatsby";

const BlogPage = () => {

    const data = useStaticQuery(graphql `
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title,
                            date
                            }
                            
                            }}}}
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage
// GOAL 1 - Generate a slug for each post
// gatsby.md -> gatsby -> /blog

// GOAL 2 - Generate the blog post page template
// GOAL 3 - Generate a new page for each post



