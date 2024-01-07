import { Routes, Route } from "react-router-dom";
import './styles/app.css'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Login from "./pages/Login";
import MateriBelajar from "./pages/MateriBelajar";
import TentangKami from "./pages/TentangKami";

const App = () =>{
  return(
    <>
    <Navbar/>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/materi-belajar" Component={MateriBelajar}></Route>
        <Route path="/tentang-kami" Component={TentangKami}></Route>
      </Routes>
    <Footer/>
    </>

  )
}

export default App;