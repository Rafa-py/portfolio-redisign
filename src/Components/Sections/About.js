import React from 'react'
import Button from '../Button';
import Title from "../Title";
import style from "./About.module.scss";
import photo from "../../Assets/profile.jpg";

const About = () => {
  return (
    <div className={`container ${style.about}`}>
      <Title title="Sobre Mim"/>
      <div className={style.box}>
        <div className={style.box_Img}>
            <img className={style.img} src={photo}/>
            <div className={style.btns}>
                <Button color="dark" url="www.google.com.br">Linkedin</Button>
                <Button color="light" download>Currículo</Button>
            </div>
        </div>
        <div className={style.box_Text}>
          <p>
        Podemos dizer que acabei de chegar por aqui. Me formei em 2022 em <span>Tecnologia em Banco de Dados.</span> Minha primeira experiência profissional foi como estagiário de Front End na MZ Group. 
        </p>
        <p>
        Essa experiência me deu uma certeza, que na faculdade era só uma hipótese. A certeza de que quero ajudar a moldar o futuro mundo em que viveremos a partir da tecnologia.   
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default About
