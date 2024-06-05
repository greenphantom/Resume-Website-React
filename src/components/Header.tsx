import React from 'react';
import { ResumeData } from '../models/ResumeData';

interface HeaderProps {
    resumeData: ResumeData;
}

const Header: React.FC<HeaderProps> = ({ resumeData }) => {
    return (
        <header>
            <h1>{resumeData.name}</h1>
            <p>{resumeData.professional_summary}</p>
        </header>
    );
};

export default Header;