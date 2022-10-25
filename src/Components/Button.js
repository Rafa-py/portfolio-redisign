import React, { Children } from 'react';
import style from "./Button.module.scss"
import {UserContext} from '../UserContext';
import gitIcon from "../Assets/git-icon.png";
import figmaIcon from "../Assets/figma-icon.png";
import siteIcon from "../Assets/site-icon.png";


const Button = ({children,value, onClick, logo, href, ...props}) => {
  // const dados = React.useContext(UserContext);
  let [btnColor, setBtnColor] = React.useState("#4581E5");
  let [download, setDownload] = React.useState(null);
  let [imgLogo, setImgLogo] = React.useState(null);


  React.useEffect(()=>{

    switch(logo){
      case "git":
        setImgLogo(gitIcon);
        break;
      case "figma":
        setImgLogo(figmaIcon);
        break;
      case "site":
        setImgLogo(siteIcon);
        break;
    };

    console.log(imgLogo)

    if(props.color == "dark"){
      setBtnColor("#001C4C");
    }else if(props.color == "light"){
      setBtnColor("#4581E5")
    }else if(props.color == "grey"){
      setBtnColor("#24292F")
    }
    if(props.download){
      setDownload(true);
    }
  })
  return (
    <button onClick={onClick} className={style.btn} style={{background: btnColor}}>
      {imgLogo && <img src={imgLogo}/>}
      <a href={props.href}  download={download}>{children}</a>
    </button>
  )
}

export default Button
