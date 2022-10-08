import './styles/App.scss';
import 'animate.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactMePage from './pages/ContactMePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <main className="App">
        <Navbar />        
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact-me' element={<ContactMePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
        <Footer />
    </main>
  );
}

export default App;
