import React from 'react';
import Button from '../Button';
import { UserStorage } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import {DATA_PROJECTS} from "../../Assets/data";
import styles from "./ProjectsItem.module.scss";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ProjectsItem = () => {
    let [modal, setModal] = React.useState(false);
    let [btnData,setBtnData] = React.useState(null);
    let navigate = useNavigate();
    let dataProjects = DATA_PROJECTS();
    let resumeData = dataProjects.slice(0,2);

    let handleClick = (target) =>{
        if(target == "all"){
            navigate("/ver-todos")
            window.scrollTo(0, 0)
        }else{
            setBtnData(target)
            setModal(true)
        }
    }

  return (
    <div className={styles.projects}> 
        <Modal
        isOpen={modal}
        onRequestClose={()=>setModal(false)}
        overlayClassName="modalOverlay"
        className="modal-content"
        contentLabel="Example Modal"
      >
        {btnData && <div className="modal">
            <h3 className='titleModal'>{btnData.name}</h3>
            <div className='containerModal'>
                <div className='boxPhoto'>
                    <img src={btnData.photo} className="photoModal"/>  
                    <div className='btnBox'>
                        <Button minhaMae="É linda"  url={btnData.links.git} color="grey" logo="git">Github</Button>
                        <Button url={btnData.links.figma} color="grey" logo="figma">Figma</Button>
                        <Button  url={btnData.links.site} color="grey" logo="site">Site</Button> 

                    </div>
                </div> 
                <div className='boxDescription'>
                    <p className='largeDescription'>{btnData.largeDescription}</p>
                </div>
            </div>
        </div>}
      </Modal>
        {resumeData.map((item)=>(
            <div className={styles.box} key={item.name}>
                <div className={styles.boxText}>
                    <h4>{item.name}</h4>
                    <p>{item.shortDescription}</p>
                    <Button url="#" onClick={()=>handleClick(item)} value={item.name} className={styles.btn}>Ver Mais</Button>
                </div>
                <div className={styles.boxImg}>
                    <img src={item.photo} onClick={()=>handleClick(item)}/>
                </div>
            </div>
        ))}
        <Button url="#" onClick={()=>handleClick("all")} className={styles.SeeAll} color="dark">Ver Todos</Button>
    </div>
  )
}

export default ProjectsItem
