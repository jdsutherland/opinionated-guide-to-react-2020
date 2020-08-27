import React from "react"
import { graphql } from "gatsby"

const User = ({ data }) => {
  const user = data.allRandomUser.edges[0].node
  return <h1>Hello {user.name.first}</h1>
}

export const query = graphql`
  query User($id: String) {
    allRandomUser(filter: { id: { eq: $id } }, limit: 1) {
      edges {
        node {
          name {
            first
          }
        }
      }
    }
  }
`

export default User
