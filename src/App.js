import './App.css';
import './pages/Pages.css';
import './components/Nav.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './pages/Home';
import Produk from './pages/Produk';
import Kategori from './pages/Kategori';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/kategori" element={<Kategori />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
