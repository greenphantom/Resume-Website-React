import React from 'react';
import './styles.css';
import data from './ReferenceData/resume.json';
import { ResumeData } from './models/ResumeData';
import Header from './components/Header';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import ProfileImage from './components/ProfileImage/ProfileImage';
import Fab from './components/Fab/Fab';

const App: React.FC = () => {
  const resumeData: ResumeData = data;

  return (
    <div>
      {false && <ProfileImage imageUrl={resumeData.image} />}
      <Header resumeData={resumeData} />
      <Contact contact={resumeData.contact} />
      <WorkExperience workExperience={resumeData.work_experience} />
      <Education education={resumeData.education} />
      <Skills skills={resumeData.skills} />
      <Fab /> {/* Add the FAB component */}
    </div>
  );
};

export default App;