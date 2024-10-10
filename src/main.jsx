import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Article from './Article'
import About from './About'
import Gallery from './Gallery'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    <Article></Article>
    <About></About>
    <Gallery></Gallery>
  </StrictMode>,
)
