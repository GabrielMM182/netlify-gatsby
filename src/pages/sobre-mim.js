import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import Image from "../components/image"



export default () => (

  <Container>
    <h1 style={{fontSize: 40}}>THE STROKES FÃ PAGE DESENVOLVIDA EM GATSBY.JS</h1>
  
    <p>
    Bem vindo a minha primeira pagina feita em gatsby!!! que foi dedicada a banda <b>The Strokes</b>  
    com o novo uso dessa pagina podemos criar algo mais rapido para nevegação podendo muito bem fazer
    manipulação de dados como entrar em minha pagina de<Link to="/contato">contatos</Link> ou mesmo
    mudar o estilo de letras usado nesse site, varias coisas que você pode aprender na propria página 
    oficial <a href="https://www.gatsbyjs.org/tutorial/">GatsBy!</a> ou mesmo com o curso de 
    <a href="https://www.devpleno.com/devreactjs/">React</a> e tambem 
    concluir a minha tarefa que é fazer minha pagina usando essa biblioteca XD espero que tenha
    ficada algo legal e que <b>VOCÊ</b> que está lendo fique a vontade ♪♬♫	✌☻	❤☢	<i>IS THIS IT</i>
    
    <div style={{maxWidth: '400',maxHeight: '100' ,marginTop: '2.0rem'}}>
    <Image/>
    </div>
    </p>
  
  </Container>

)