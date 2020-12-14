import React from 'react'
import Layout from '../components/layout'
import {graphql, useStaticQuery} from "gatsby";

const BlogPage = () => {

    const data = useStaticQuery(graphql `
        query {
            allMarkdownRemark {
                edges {
                    node{
                        frontmatter {
                            title,
                            date
                            }
                            html
                            excerpt
                            }}}}
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here.. a lists</p>
            <ol>
                {data.allMarkdownRemark.edges.node.frontmatter.title}
                {data.allMarkdownRemark.edges.node.frontmatter.date}
            </ol>
        </Layout>
    )
}

export default BlogPage
