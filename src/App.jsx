import './styles/App.scss';
import 'animate.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WebTechs from './components/WebTechs';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
        <header>
            <Navbar />
            <Hero />
        </header>
        <About />
        <Skills />
        <WebTechs />
        <Projects />
    </div>
  );
}

export default App;
