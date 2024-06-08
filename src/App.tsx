import React, { useState, useEffect } from 'react';
import './styles.css';
import './themes.css';
import data from './ReferenceData/resume.json';
import { ResumeData } from './models/ResumeData';
import Header from './components/Header';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Project/Project';
import Fab from './components/Fab/Fab';

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const resumeData: ResumeData = data;

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div>
      <button className="theme-toggle-button" onClick={toggleTheme} title="Toggle light/dark mode">
        {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
      </button>
      <Header resumeData={resumeData} />
      <Contact contact={resumeData.contact} />
      <WorkExperience workExperience={resumeData.work_experience} />
      <Education education={resumeData.education} />
      <Projects projects={resumeData.projects} />
      <Skills skills={resumeData.skills} />
      <Fab />
    </div>
  );
};

export default App;