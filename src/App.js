import './App.scss';
import "./Reset.scss";
import "./Variables.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { UserStorage } from './UserContext';
import Header from "./Components/Sections/Header";
import Footer from "./Components/Sections/Footer";
import Home from "./Components//Sections/Home";


function App() {
  return (
    <div>
      <UserStorage>
        <Header />
        <Home />
        <Footer />
      </UserStorage>
    </div>
  );
}

export default App;
