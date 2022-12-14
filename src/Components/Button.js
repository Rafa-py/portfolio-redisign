import React, { Children } from 'react';
import style from "./Button.module.scss";
import { Link } from 'react-router-dom';
import {UserContext} from '../UserContext';
import gitIcon from "../Assets/git-icon.png";
import figmaIcon from "../Assets/figma-icon.png";
import siteIcon from "../Assets/site-icon.png";


const Button = ({children,value, onClick, logo, url, ...props}) => {
  // const dados = React.useContext(UserContext);
  let [btnColor, setBtnColor] = React.useState("#4581E5");
  let [download, setDownload] = React.useState(false);
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
    <div className={style.div}>{ url &&
      <button onClick={onClick} className={style.btn} style={{background: btnColor}}>
        {imgLogo && <img src={imgLogo}/>}
        {url && <Link to={url}>{children}</Link>}
      </button>
      }</div>
  )
}

export default Button
