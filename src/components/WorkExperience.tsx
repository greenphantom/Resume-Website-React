import React from 'react';
import { WorkExperience as WorkExperienceType } from '../models/WorkExperience';

interface WorkExperienceProps {
    workExperience: WorkExperienceType[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ workExperience }) => {
    return (
        <section>
            <h2>Work Experience</h2>
            {workExperience.map((job, index) => (
                <article key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h3>{job.title} at {job.company}</h3>
                            <p>{job.dates}</p>
                        </div>
                        <div style={{ float: 'right', fontWeight: 'bold' }}>
                            <p>{job.location}</p>
                        </div>
                    </div>
                    <ul>
                        {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx}>{responsibility}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </section>
    );
};

export default WorkExperience;