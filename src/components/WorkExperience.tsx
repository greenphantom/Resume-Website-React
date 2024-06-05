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
                    <h3>{job.title} at {job.company}</h3>
                    <p>{job.dates}</p>
                    <p>{job.location}</p>
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