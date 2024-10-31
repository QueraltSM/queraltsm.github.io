import './App.css';
import profilePicture from './profile-picture.jfif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header.js';
import Experience from './pages/Experience.js';
import Projects from './pages/Projects.js';
import Skills from './pages/Skills.js';
import Contact from './pages/Contact.js';
import Footer from './components/Footer.js';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. 
          Cras vitae eros nec lacus bibendum vehicula. Sed auctor, odio eu commodo sollicitudin, metus 
          lectus interdum odio, a facilisis turpis urna non odio. Donec eget magna eu risus vulputate 
          commodo et eu nunc.
        </p>
        <Footer></Footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
