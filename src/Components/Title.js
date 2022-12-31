import React from 'react';
import style from "./Title.module.scss";
import "../Variables.scss";

const Title = ({title, page}) => {
  let margin = page == "projects" ? "20px 0 50px 0": null;
  return (
    <h3 className={style.title} style={{margin: margin}} >{title}</h3>
  )
}

export default Title
