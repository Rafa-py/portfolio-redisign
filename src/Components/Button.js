import React, { Children } from 'react';
import style from "./Button.module.scss"
import {UserContext} from '../UserContext';


const Button = ({children, ...props}) => {
  // const dados = React.useContext(UserContext);
  let [btnColor, setBtnColor] = React.useState("#4581E5");
  let [download, setDownload] = React.useState(null);
  React.useEffect(()=>{
    if(props.color == "dark"){
      setBtnColor("#001C4C");
    }else if(props.color == "light"){
      setBtnColor("#4581E5")
    }
    if(props.download){
      setDownload(true);
    }
  })
  return (
    <button className={style.btn} style={{background: btnColor}}>
      <a href={props.url} download={download}>{children}</a>
    </button>
  )
}

export default Button
