import React from 'react';
import { Skills as SkillsType } from '../../models/Skills';
import SkillBadge from './SkillBadge/SkillBadge';

interface SkillsProps {
    skills: SkillsType;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <section>
            <h2>Skills</h2>
            <div>
                <h3>Languages</h3>
                {skills.languages.map((language, index) => (
                    <SkillBadge key={index} skill={language} />
                ))}
            </div>
            <div>
                <h3>Databases</h3>
                {skills.databases.map((database, index) => (
                    <SkillBadge key={index} skill={database} />
                ))}
            </div>
            <div>
                <h3>Frameworks</h3>
                {skills.frameworks.map((framework, index) => (
                    <SkillBadge key={index} skill={framework} />
                ))}
            </div>
            <div>
                <h3>Tooling</h3>
                {skills.tooling.map((tool, index) => (
                    <SkillBadge key={index} skill={tool} />
                ))}
            </div>
        </section>
    );
};

export default Skills;