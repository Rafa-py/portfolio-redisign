import React from 'react';
import style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className='container'>
        <div className={style.header}>
          <h2 className={style.logo}><a href=''>Rafa</a></h2>
          <nav>
            <ul className={style.menu}>
              <li className={style.item}><a href=''>Sobre Mim</a></li>
              <li className={style.item}><a href=''>Projetos</a></li>
              <li className={style.item}><a href=''>Conhecimentos</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
