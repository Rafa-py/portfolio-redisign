import React from 'react';
import Button from '../Components/Button';
import { UserStorage } from '../UserContext';
import photoDog from "./dogs.jpg";
import photoKislev from "./kislev.jpg";
import styles from "./ProjectsData.module.scss";
import Modal from '../Components/Sections/Modal';


const ProjectsData = ({...props}) => {
    let [over, setOver] = React.useState(null);
    let [modal, setModal] = React.useState(null);
    let [btnData,setBtnData] = React.useState(null);
    
    React.useEffect(()=>{
        if(props.overview){
            setOver(true);
        }else{
            setOver(false);
        }
    });

    let handleClick = (target) =>{
        setModal(true)
        if(target == "all"){
            setBtnData(data);
        }else{
            setBtnData(target)
        }
    }

    let data = [
         {
            name: "Dogs",
            type: "Estudos",
            shortDescription: "Projeto final do curso de react.js completo da Origamid. Projeto criado para praticar o consumo de APIs e o padrão de projeto MCV. ",
            largeDescription: "Ainda vou fazer",
            photo: photoDog,
         },
          {
            name: "Kislev",
            type: "Freelancer",
            shortDescription: "Landing Page feita para marcar a presencial virtual da Barbearia Kislev",
            largeDescription: "Ainda vou fazer",
            photo: photoKislev,
         }
        ]



  return (
    <div className={styles.projects}>
        {modal && <Modal data={btnData} setModal={setModal} />}
        {data.map((item)=>(
            <div className={styles.box}>
                <div className={styles.boxText}>
                    <h4>{item.name}</h4>
                    <p>{item.shortDescription}</p>
                    <Button onClick={()=>handleClick(item)} value={item.name} className={styles.btn}>Ver Mais</Button>
                </div>
                <div className={styles.boxImg}>
                    <img src={item.photo} onClick={()=>handleClick(item)}/>
                </div>
            </div>
        ))}
        <Button onClick={()=>handleClick("all")} className={styles.SeeAll} color="dark">Ver Todos</Button>
    </div>
  )
}

export default ProjectsData
