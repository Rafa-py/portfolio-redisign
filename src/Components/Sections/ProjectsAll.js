import React from 'react';
import Button from '../Button';
import Title from "../Title";
import { useNavigate } from 'react-router-dom';
import {DATA_PROJECTS} from "../../Assets/data";
import styles from "./ProjectsAll.module.scss";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ProjectsAll = () => {
    let [modal, setModal] = React.useState(false);
    let [btnData,setBtnData] = React.useState(null);
    let [techFilter, setTechFilter] = React.useState(null);
    let [typeFilter, settypeFilter] = React.useState(null);
    let [allFilter, setAllFilter] = React.useState(null);
    let dataProjects = DATA_PROJECTS();

    let handleClick = (target) =>{
            setBtnData(target)
            setModal(true)
    }

    let filter = (target) =>{
        let value = target.value.toLowerCase();
        if(value == "tipo"){
            if(techFilter){
                let filterTech = dataProjects.filter((data) => {
                    return data ? data.tech.includes(techFilter) : null; 
                })  
                setAllFilter(filterTech)
            }  else{
                setAllFilter(dataProjects)
            }
            settypeFilter(null)
        }else if(value == "tecnologia"){
            if(typeFilter){
                let filterTech = dataProjects.filter((data) => {
                    return data ? data.type.includes(typeFilter) : null; 
                })  
                setAllFilter(filterTech)
            }  else{
                setAllFilter(dataProjects)
            }
            setTechFilter(null)
        }else{
            if(target.name == "tech"){
                setTechFilter(value)   
                if(typeFilter == null){
                    let filterTech = dataProjects.filter((data) => {
                        return data ? data.tech.includes(value) : null; 
                    }) 
                    setAllFilter(filterTech)
                } else if(typeFilter){
                    let filterTech = allFilter.filter((data) => {
                        return data ? data.tech.includes(value) : null; 
                    })  
                    if(filterTech.length = "0"){
                        window.alert("Item não encontrado!")

                    }else{
                        setAllFilter(filterTech);
                    } 
                }          
            }else if(target.name == "type"){
                settypeFilter(value);
                if(techFilter == null){
                    let filterType = dataProjects.filter((data) => {
                        return data ? data.type.includes(value) : null; 
                    }) 
                    setAllFilter(filterType)
                } else if(techFilter){
                    let filterType = allFilter.filter((data) => {
                        return data ? data.type.includes(value) : null; 
                    })  
                    if(filterType.length = "0"){
                        window.alert("Item não encontrado!")

                    }else{
                        setAllFilter(filterType)
                    }
                }   
        }
        }
    }


  return (
    <div className={`${styles.projects} container`}>
        <Title className={styles.title} page="projects" title="Projetos" />
        <div className={styles.filtersBox}>
            <select name='tech' onChange={(e) => filter(e.target)}>
                <option>Tecnologia</option>
                <option>React</option>
                <option>Sass</option>
                <option>Vanilla</option>
                <option>Wordpress</option>
                <option>Tailwind</option>
                <option>Bootstrap</option>
            </select>
            <select name='type'  onChange={(e) => filter(e.target)}>
                <option>Tipo</option>
                <option>Estudos</option>
                <option>Freelancer</option>
            </select>
        </div>
        <Modal
        isOpen={modal}s
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

      {allFilter?
      allFilter.map((item)=>(
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
      ))
    :
    dataProjects.map((item)=>(
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
    ))
    }
    </div>
  )
}

export default ProjectsAll
