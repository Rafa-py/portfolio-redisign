import './App.scss';
import "./Reset.scss";
import "./Variables.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { UserStorage } from './UserContext';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";


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
