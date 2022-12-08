import React from 'react';
import Button from "../Button";
import styles from "./Modal.module.scss";

const Modal = ({data, setModal, setModalAll}) => {

    let handleOutsideClick = ({target, currentTarget}) =>{
      if(target == currentTarget){
        setModal(null);
      }
    }

  return (
    <>
      {data && (
          <div className={styles.modal} onClick={handleOutsideClick}>
            <div className={styles.container}>
              <h3 className={styles.name}>{data.name}</h3>
              <div className={styles.flex}>
                <div className={styles.photo}>
                  <img src={data.photo} className={styles.img}/>
                  <div className={styles.btns}>
                    <Button href="www.google.com.br" color="grey" logo="git">Github</Button>
                    <Button href="#" color="grey" logo="figma">Figma</Button>
                    <Button href="#" color="grey" logo="site">Site</Button>
                  </div>
                </div>
                <p className={styles.text}>{data.largeDescription}</p>
              </div>
            </div>
          </div>
      )}
    </>
  )
}

export default Modal
