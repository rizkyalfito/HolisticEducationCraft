import { Routes, Route } from "react-router-dom";
import './styles/app.css'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import MateriBelajar from "./pages/MateriBelajar";
import TentangKami from "./pages/TentangKami";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App = () =>{
  return(
    <>
    <Navbar/>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/materi-belajar" Component={MateriBelajar}></Route>
        <Route path="/tentang-kami" Component={TentangKami}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/register" Component={Register}></Route>
      </Routes>
    <Footer/>
    </>

  )
}

export default App;