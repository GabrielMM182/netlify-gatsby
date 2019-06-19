import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"


const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default ({ children }) => (
    <div style={{ margin: '6rem auto' , maxWidth: 650, padding: '0 1rem'}}>
    <header style={{ marginBottom: `5.0rem` }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>StrokesGatsBY</h3>
    </Link>
    <ul style={{ listStyle: `none`, marginTop: '1.5rem',float: `right` }}>
      <ListLink to="/">Noticias</ListLink>
      <ListLink to="/about-css-module/">Coment</ListLink>
      <ListLink to="/contato/">Contato</ListLink>
      <ListLink to="/musicas/">Musicas</ListLink>
      <ListLink to="/biografia/">Biografia</ListLink>
      <ListLink to="/my-files/">Files</ListLink>
      <ListLink to="/sobre-mim/">sobre mim</ListLink>
    </ul>
  </header>
   
    { children }
    </div>
)