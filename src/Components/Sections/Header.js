import React from 'react';
import style from "./Header.module.scss";
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let [active, setActive] = React.useState(null);
  let [nav, setNav] = React.useState(null);
  let navigate = useNavigate();
  
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
          <h2 className={style.logo} onClick={()=>navigate("/portfolio-redisign")}><a href=''>Rafa</a></h2>
            <nav className={`${style.nav} ${nav}`}>
            <ul className={style.menu}>
              <li className={style.item}><Link className={style.link} to='about' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  >Sobre Mim</Link></li>
              <li className={style.item}><Link className={style.link} to='projects'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  >Projetos</Link></li>
              <li className={style.item}><Link className={style.link} to='knowledge'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  >Conhecimentos</Link></li>
            </ul>
          </nav>
          <div onClick={handleClick} className={`${style.toggle} ${active}`}></div>
        </div>
      </div>
    </>
  )
}

export default Header
