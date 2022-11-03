import React from 'react';
import styles from "./Footer.module.scss";
import copy from "/home/rafa/porfolio/src/Assets/copy.png";

const Footer = () => {
  return (
    <div className={`container`}>
      <div className={styles.footer}>
        <p><img className={styles.img} src={copy} alt="Icone Copyright"/>2022 rafadev.tech</p>
        <p>Powered by Rafa</p>
      </div>
    </div>
  )
}

export default Footer
