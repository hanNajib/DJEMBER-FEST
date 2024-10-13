import { StrictMode } from "react";
import "./index.css";
import App from "./App";
import Article from "./Article";
import About from "./About";
import Gallery from "./Gallery";
import Wisata from "./Wisata";
import Kuliner from "./Kuliner";
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <StrictMode>
      <Navbar></Navbar>
      <App></App>
      <Article></Article>
      <About></About>
      <Gallery></Gallery>
      <Wisata></Wisata>
      <Kuliner></Kuliner>
    </StrictMode>
  );
}
