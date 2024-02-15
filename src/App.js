import './App.css';
import Intro from './comp/intro/Intro';
import GamePage from './comp/game/GamePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro/>}></Route>
          <Route path="/gamepage" element={<GamePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
