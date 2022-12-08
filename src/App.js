import './App.scss';
import "./Reset.scss";
import "./Variables.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { UserStorage } from './UserContext';
import Header from "./Components/Sections/Header";
import Footer from "./Components/Sections/Footer";
import Home from "./Components//Sections/Home";
import Button from './Components/Button';


function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
