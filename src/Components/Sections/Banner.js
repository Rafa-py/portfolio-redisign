import React from 'react';
import style from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={`container ${style.banner}`}>
      <p className={style.hello}>Olá, eu sou o <span>Rafa.</span></p>
      <p className={style.slogan}>Apaixonado por tecnologia, entusiasta do design, mergulhando de cabeça no Front End</p>
    </div>
  )
}

export default Banner;