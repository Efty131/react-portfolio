import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './CSS/App.css';
import './CSS/Banner.css';
import './CSS/Skills.css';
import './CSS/Projects.css';
import './CSS/Contact.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
