import React from 'react';
import style from "./Header.module.scss";


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
              <li className={style.item}><a href='#1'>Sobre Mim</a></li>
              <li className={style.item}><a href='#2'>Projetos</a></li>
              <li className={style.item}><a href='#3'>Conhecimentos</a></li>
            </ul>
          </nav>
          <div onClick={handleClick} className={`${style.toggle} ${active}`}></div>
        </div>
      </div>
    </>
  )
}

export default Header
