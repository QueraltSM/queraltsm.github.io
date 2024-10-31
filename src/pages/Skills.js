import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import '../styles.css'; // Asegúrate de importar el archivo CSS

const Skills = () => {
  return (
    <div>
    <Header></Header>
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-category">
        <p className="category-title">Frontend</p>
        <div className="skill-tags">
          <span className="skill-tag pastel-pink">JavaScript</span>
          <span className="skill-tag pastel-blue">React</span>
          <span className="skill-tag pastel-green">HTML</span>
          <span className="skill-tag pastel-yellow">CSS</span>
        </div>
      </div>

      <div className="skills-category">
        <p className="category-title">Databases</p>
        <div className="skill-tags">
          <span className="skill-tag pastel-purple">SQL</span>
          <span className="skill-tag pastel-orange">MongoDB</span>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </div>
  );
};
export default Skills;