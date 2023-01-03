import React from 'react'
import Button from '../Button';
import Title from "../Title";
import style from "./About.module.scss";
import photo from "../../Assets/profile.jpg";
import curriculo from "/home/rafa/porfolio/src/Assets/Rafael da Silva Pinto - Curriculo.pdf";

const About = () => {
  let handleClick = ()=>{
    window.open(curriculo, '_blank');
  }
  return (
    <div className={`container ${style.about}`}>
      <Title title="Sobre Mim" />
      <div className={style.box}id="about">
        <div className={style.box_Img}>
            <img className={style.img} src={photo}/>
            <div className={style.btns}>
                <Button color="dark" url="//www.linkedin.com/in/rafael-pinto-3005a325a/">Linkedin</Button>
                <Button color="light" onClick={handleClick} url="#">Currículo</Button>
            </div>
        </div>
        <div className={style.box_Text}>

        <p><b style={{color: "#48C5C9"}}>Olá, eu sou Rafa!</b> <span>Formado em Banco de Dados,</span> mergulhando no <span>Front End</span> desde 2021, Karateca e professor de karatê nas horas vagas.</p> 
<p>Meu interesse no Front veio da possibilidade de fazer coisas belas através do código. Um produto que resolve o problema do cliente e que tem uma paleta de cores que não agride o usuário, espaçamentos bem definidos, tipografia correta e animações sutis é bem mais capaz de apaixonar o cliente do que um produto cinza, sem beleza alguma mas que resolve o problema. Sinto ser a minha tarefa equilibrar o código limpo, seguro e funcional à um layout construído com atenção aos detalhes, unindo harmonicamente a forma e a função.</p>  
        </div>
      </div>
      
    </div>
  )
}

export default About
