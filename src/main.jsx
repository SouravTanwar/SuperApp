import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import MovieSelection from './pages/MovieSelection.jsx';
import CarouselPage from './pages/CarouselPage.jsx';
import Browse from './pages/Browse.jsx';
import NotFound from "./pages/404.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selection" element={<MovieSelection />} />
        <Route path="/carousel" element={<CarouselPage />} />
        <Route path='/browse' element={<Browse />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
