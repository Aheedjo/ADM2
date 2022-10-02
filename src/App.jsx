import './styles/App.scss';
import 'animate.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import HireMePage from './pages/HireMePage';

function App() {
  return (
    <main className="App">
        <Navbar />        
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/hire-me' element={<HireMePage />} />
        </Routes>
        <Footer />
    </main>
  );
}

export default App;
