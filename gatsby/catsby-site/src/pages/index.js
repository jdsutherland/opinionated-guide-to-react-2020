import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi peeps :wave:</h1>
    <ul>
      {data.allRandomUser.edges.map(({ node }) => (
        <Link to={`users/${node.id}`} key={node.id}>
          <li>
            <img src={node.picture.thumbnail} alt={node.name.first} />
            {node.name.first} {node.name.last}
          </li>{" "}
        </Link>
      ))}
    </ul>
  </Layout>
)

export const Query = graphql`
  query Users {
    allRandomUser {
      edges {
        node {
          id
          name {
            first
            last
          }
          picture {
            thumbnail
          }
        }
      }
    }
  }
`

export default IndexPage
