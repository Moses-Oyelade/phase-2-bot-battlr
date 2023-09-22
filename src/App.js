import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import BotCollection from "./pages/BotCollection";
import MyArmyBot from "./pages/MyArmyBot";
import Home from "./pages/Home";
// import './App.css';




function App() {



  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="botcollection" element={<BotCollection/>}/>
            <Route path="myarmybot" element={<MyArmyBot/>}/>
          </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
