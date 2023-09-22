import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar";
import Home from "./component/Pages/home";
import About from "./component/Pages/about";

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;