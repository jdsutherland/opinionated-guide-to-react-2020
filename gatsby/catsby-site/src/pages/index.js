import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi peeps 👋</h1>
    <ul>
      {data.allRandomUser.edges.map(({ node }) => (
        <li>
          <img src={node.picture.thumbnail} alt={node.name.first} />
          {node.name.first} {node.name.last}
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
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
