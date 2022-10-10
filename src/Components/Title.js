import React from 'react';
import style from "./Title.module.scss";
import "../Variables.scss";

const Title = ({title}) => {
  return (
    <h3 className={style.title}>{title}</h3>
  )
}

export default Title
