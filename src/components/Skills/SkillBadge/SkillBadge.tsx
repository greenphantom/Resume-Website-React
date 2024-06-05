import React from 'react';
import './SkillBadge.css';

interface SkillBadgeProps {
    skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
    return <span className="skill-badge">{skill}</span>;
};

export default SkillBadge;