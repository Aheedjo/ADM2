import './styles/App.scss';
import 'animate.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="App">
        <header>
            <Navbar />
            <Hero />
        </header>
        <About />
    </div>
  );
}

export default App;
