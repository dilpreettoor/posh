import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import NotFound from "./pages/notfound/notfound";
import AboutUs from "./pages/aboutus/about";
import Contact from "./pages/contact/contact";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
