import React from 'react';
import Button from '../Button';
import Title from '../Title';
import styles from "./ModalAll.module.scss";
import stylesProject from "/home/rafa/porfolio/src/Assets/ProjectsData.module.scss";

const ModalAll = ({data, setModal, setModalAll, setBtnData}) => {
    let handleOutsideClick = ({target, currentTarget}) =>{
        if(target == currentTarget){
          setModalAll(null);
        }
      }
    let handleClick = (target) =>{
        setBtnData(target);
        setModalAll(null);
        setModal(true);
    }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
        <div className={styles.container}>
            <Title title="Todos os Projetos"/>
            {data.map((item)=>(
                    <div className={stylesProject.box}>
                        <div className={stylesProject.boxText}>
                            <h4>{item.name}</h4>
                            <p>{item.shortDescription}</p>
                            <Button onClick={()=>handleClick(item)} value={item.name} className={styles.btn}>Ver Mais</Button>
                        </div>
                        <div className={`${stylesProject.boxImg} ${styles.boxImg}`}>
                            <img src={item.photo} onClick={()=>handleClick(item)}/>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default ModalAll
