import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './CSS/App.css';
import './CSS/Banner.css';
import './CSS/Skills.css';
import './CSS/Projects.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
