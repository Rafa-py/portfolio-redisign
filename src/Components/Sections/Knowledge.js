import React from 'react';
import Title from "../Title";
import styles from "./Knowledge.module.scss";
import {ReactComponent as ReactIcon} from "/home/rafa/porfolio/src/Assets/KnowledgeIcons/react-icon.svg";
import {ReactComponent as HtmlIcon} from "/home/rafa/porfolio/src/Assets/KnowledgeIcons/html.svg";
import {ReactComponent as CssIcon} from "/home/rafa/porfolio/src/Assets/KnowledgeIcons/css-icon.svg";
import {ReactComponent as TailwindIcon} from "/home/rafa/porfolio/src/Assets/KnowledgeIcons/tailwind-icon.svg";
import {ReactComponent as WPIcon} from "/home/rafa/porfolio/src/Assets/KnowledgeIcons/wordpress-icon.svg";
import {ReactComponent as JsIcon} from "/home/rafa/porfolio/src/Assets/KnowledgeIcons/js-icon.svg";
import {ReactComponent as SassIcon} from "/home/rafa/porfolio/src/Assets/KnowledgeIcons/sass-icon.svg";



const Knowledge = () => {
  let [text, setText] = React.useState("*passe o cursor do mouse no card para ler*")
  let texts = {
    html: "HTML ou HyperText Markup Language, que significa: 'Linguagem de Marcação de Hipertexto' é uma linguagem de marcação utilizada na construção de páginas na Web.",
    css: "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.",
    sass: "Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. ",
    wp: "WordPress é um sistema livre e aberto de gestão de conteúdo para internet, baseado em PHP com banco de dados MySQL.",
    react: "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    tail: "Tailwind CSS é um framework desenvolvido para maximizar o potencial do bom e velho CSS e levá-lo ainda mais longe.",
    js: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
  }
  let handleMouseOver = ({target}) =>{
    let icon = target.id;
    setText(texts[icon]);
    let photo = target;
    photo.style.fill = "#48C5C9";
  }
  let handleMouseLeave = ({target}) =>{
    setText("*passe o cursor do mouse no card para ler*");
    let photo = target;
    photo.style.fill = "#F7F7F7";
  }
  return (
    <div className='container' id="knowledge">
      <Title title="Conhecimentos" />
      <div className={styles.boxKnowledge}>
        <div className={styles.text}>
          {text && <p>{text}</p>}
        </div>
        <div className={styles.icons}>
          <HtmlIcon id="html" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className={styles.imgs} fill="#F7F7F7"/>
          <CssIcon id="css" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className={styles.imgs} fill="#F7F7F7"/>
          <JsIcon id="js" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className={styles.imgs} fill="#F7F7F7"/>
          <SassIcon id="sass" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className={styles.imgs} fill="#F7F7F7"/>
          <WPIcon id="wp" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className={styles.imgs} fill="#F7F7F7"/>
          <TailwindIcon id="tail" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className={styles.imgs} fill="#F7F7F7"/>
          <ReactIcon id="react" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className={styles.imgs} fill="#F7F7F7"/>
        </div>
      </div>
    </div>
  )
}

export default Knowledge
