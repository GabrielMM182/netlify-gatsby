import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
console.log(styles)

const User = props => (
    <div className={styles.user}>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )

export default () => (
  
  <Container>
    <h1 style={{fontSize: 40}} >COMENTARIO DE OUTROS FÃS</h1>
    <User
    username="Janaina"
    avatar="https://imgur.com/T78RVOt.jpg"
    excerpt="O que posso dizer dessa banda incrivel, minha banda favorita AMO MUITO!!! principalmente o julian."
  />
  <User
    username="ruth"
    avatar= "https://imgur.com/T78RVOt.jpg"
    excerpt="Na minha opnião todo mundo da banda tem cara de peixe morto."
  />
<User
    username="gabriel"
    avatar="https://imgur.com/T78RVOt.jpg"
    excerpt="THE ROOOMM IS ON FIREEEEE SHE FIX HIS HAIRRRRRRRR"
/>

</Container>


)