import { StrictMode } from "react";
import "./index.css";
import App from "./App";
import Article from "./Article";
import About from "./About";
import Gallery from "./Gallery";
import Wisata from "./Wisata";
import Kuliner from "./Kuliner";
import Navbar from './components/Navbar';
import Footer from './Footer';
import Kontak from "./Kontak";

export default function Home() {
  return (
    <StrictMode>
      <Navbar>
          <a href="#home" className="hover:text-violet-700  hover:scale-100 duration-200 transition-all scale-95 z-10">Beranda</a>
          <a href="#article" className="hover:text-violet-700  hover:scale-100 duration-200 transition-all scale-95 z-10">Artikel</a>
          <a href="#about" className="hover:text-violet-700  hover:scale-100 duration-200 transition-all scale-95 z-10">Tentang</a>
          <a href="#culture" className="hover:text-violet-700  hover:scale-100 duration-200 transition-all scale-95 z-10">Budaya</a>
          <a href="#destination" className="hover:text-violet-700  hover:scale-100 duration-200 transition-all scale-95 z-10">Destinasi</a>
          <a href="#umkm" className="hover:text-violet-700  hover:scale-100 duration-200 transition-all scale-95 z-10">UMKM</a>
          <a href="#contact" className="hover:text-violet-700  hover:scale-100 duration-200 transition-all scale-95 z-10">Kontak</a>
      </Navbar>
      <App></App>
      <Article></Article>
      <About></About>
      <Gallery></Gallery>
      <Wisata></Wisata>
      <Kuliner></Kuliner>
      <Kontak></Kontak>
      <Footer></Footer>
    </StrictMode>
  );
}
