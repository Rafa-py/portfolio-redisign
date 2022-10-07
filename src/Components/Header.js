import React from 'react';
import style from "./Header.module.css";


const Header = () => {
  let [active, setActive] = React.useState(null);
  let [nav, setNav] = React.useState(null);
  let handleClick = ()=> {
    if(active == style.active){
      setActive(null);
      setNav(null);
    }else{
      setActive(style.active);
      setNav(style.showNav);
    }
  }
  return (
    <>
      <div className='container'>
        <div className={style.header}>
          <h2 className={style.logo}><a href=''>Rafa</a></h2>
          <nav className={`${style.nav} ${nav}`}>
            <ul className={style.menu}>
              <li className={style.item}><a href=''>Sobre Mim</a></li>
              <li className={style.item}><a href=''>Projetos</a></li>
              <li className={style.item}><a href=''>Conhecimentos</a></li>
            </ul>
          </nav>
              <div onClick={handleClick} className={`${style.toggle} ${active}`}></div>
        </div>
      </div>
    </>
  )
}

export default Header
