import React from 'react';
import { Education as EducationType } from '../../models/Education';
import './Education.css'; // Import the CSS file for custom styles

interface EducationProps {
    education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
    return (
        <section className="education-section">
            <h2 className="section-title">Education</h2>
            {education.map((edu, index) => (
                <article key={index} className="education-item">
                    <h3 className="degree">{edu.degree}</h3>
                    <p className="institution">{edu.institution}</p>
                    <p className="location">{edu.location}</p>
                    <p className="dates">{edu.dates}</p>
                </article>
            ))}
        </section>
    );
};

export default Education;