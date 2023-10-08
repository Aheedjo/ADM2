import './styles/App.scss';
import 'animate.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactMePage from './pages/ContactMePage';

function App() {
  return (
    <main className="App">
        <Navbar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact-me' element={<ContactMePage />} />
        </Routes>
        <Footer />
    </main>
  );
}

export default App;
