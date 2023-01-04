import './App.scss';
import "./Reset.scss";
import "./Variables.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { UserStorage } from './UserContext';
import Header from "./Components/Sections/Header";
import Footer from "./Components/Sections/Footer";
import Home from "./Components//Sections/Home";
import ProjectsAll from "./Components//Sections/ProjectsAll";
import { Helmet } from "react-helmet";
import imgBanner from "./Assets/imgBanner.png";

function App() {
  return (
    <div>
      <Helmet>
        <title>Rafa</title>
        <meta name="description" content="Portfólio do Rafa. Projetos de estudos e Freelancer"/>
        <meta name="author" content="Rafael S. Pinto - Front End Developer"/>
        <meta name="keywords" content="programação, html, portifólio, front end, react, javascript, css, desenvolvedor, programador, developer, "/>
        <meta property="og:image" content={imgBanner} />
      </Helmet>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="*" element={<Home />}/>
            <Route path="/ver-todos" element={<ProjectsAll />}/>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
