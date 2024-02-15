import './App.css';
import Intro from './comp/intro/Intro';
import GamePage from './comp/game/GamePage';
import LoginHandeler from "./comp/login/LoginHandeler";
import Home from './comp/login/Home';
import InHome from './comp/login/InHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<InHome/>}></Route>
          <Route path="/intro" element={<Intro/>}></Route>
          <Route path="/gamepage" element={<GamePage/>}></Route>
          <Route path="/login/oauth2/callback/kakao"
              element={<LoginHandeler/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
