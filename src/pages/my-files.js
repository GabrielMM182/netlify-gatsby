import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

export default ({ data }) => {
    console.log(data)
    return (
      <Container>
        <div>
          <h1 style={{fontSize: 40}}>ARQUIVOS DO SITE</h1>
          <table>
            <thead>
              <tr>
                <th>relativePath</th>
                <th>prettySize</th>
                <th>extension</th>
                <th>birthTime</th>
                <th>id</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>{node.relativePath}</td>
                  <td>{node.prettySize}</td>
                  <td>{node.extension}</td>
                  <td>{node.birthTime}</td>
                  <td>{node.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    )
  }
  
  export const query = graphql`
    query {
      allFile {
        edges {
          node {
            relativePath
            prettySize
            extension
            birthTime(fromNow: true)
            id
          }
        }
      }
    }
  `