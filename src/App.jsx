import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Vedanth from "./components/Vedanth/Vedanth";
import Team from "./components/Team/Team";
import Footer from "./Footer/Footer";
import Aluminis from "./components/Team/Alumini";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vedanth" element={<Vedanth />} />
        <Route path="/team/2024" element={<Team />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/alumni" element={<Aluminis />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
