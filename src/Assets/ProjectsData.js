import React from 'react';
import Button from '../Components/Button';
import { UserStorage } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import photoDog from "./dogs.jpg";
import photoKislev from "./kislev.jpg";
import styles from "./ProjectsData.module.scss";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ProjectsData = ({...props}) => {
    let [over, setOver] = React.useState(null);
    let [modal, setModal] = React.useState(false);
    let [btnData,setBtnData] = React.useState(null);
    let [link,setLink] = React.useState([]);
    let [modalAll,setModalAll] = React.useState(null);
    let navigate = useNavigate();
    
    React.useEffect(()=>{
        if(props.overview){
            setOver(true);
        }else{
            setOver(false);
        }
    });

    let handleClick = (target) =>{
        if(target == "all"){
            setModalAll(data);
            navigate("/ver-todos")
        }else{
            setBtnData(target)
            setModal(true)
        }
    }

    let data = [
         {
            name: "Dogs",
            type: "Estudos",
            shortDescription: "Projeto final do curso de react.js completo da Origamid. Projeto criado para praticar o consumo de APIs e o padrão de projeto MCV. ",
            largeDescription: "Ainda vou fazer",
            photo: photoDog,
            links: {
                figma: false,
                git: "//www.github.com/Rafa-py/dogs",
                site: false
            }
         },
          {
            name: "Kislev",
            type: "Freelancer",
            shortDescription: "Landing Page feita para marcar a presencial virtual da Barbearia Kislev",
            largeDescription: "Ainda vou fazer",
            photo: photoKislev,
            links: {
                figma: "//www.figma.com/file/6kw87sdKXTbcHZjnXY0tM6/Kislev-Barbearia?node-id=122%3A331&t=AzNldGlkcaC0siij-1",
                git: "//www.github.com/Rafa-py/Kislev",
                site: "//www.rafa-py.github.io/Kislev/"
            }
         },
         {
            name: "Teste 1",
            type: "Freelancer",
            shortDescription: "Landing Page feita para marcar a presencial virtual da Barbearia Kislev",
            largeDescription: "Ainda vou fazer",
            photo: photoKislev,
            links: {
                figma: "//www.figma.com/file/6kw87sdKXTbcHZjnXY0tM6/Kislev-Barbearia?node-id=122%3A331&t=AzNldGlkcaC0siij-1",
                git: "//github.com/Rafa-py/Kislev",
                site: "//rafa-py.github.io/Kislev/"
            }
         },
         {
            name: "Teste 2",
            type: "Freelancer",
            shortDescription: "Landing Page feita para marcar a presencial virtual da Barbearia Kislev",
            largeDescription: "Ainda vou fazer",
            photo: photoKislev,
            links: {
                figma: "//www.figma.com/file/6kw87sdKXTbcHZjnXY0tM6/Kislev-Barbearia?node-id=122%3A331&t=AzNldGlkcaC0siij-1",
                git: "//github.com/Rafa-py/Kislev",
                site: "//rafa-py.github.io/Kislev/"
            }
         }
        ]
    let resumeData = data.slice(0,2);


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

export default ProjectsData
