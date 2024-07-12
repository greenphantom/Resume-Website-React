import React from 'react';
import './Fab.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Fab: React.FC = () => {
    const handleDownload = () => {
        // NOTE: To make this work locally, need to add resume/ to path
        window.open(`Daniel-Tymecki-Resume.pdf`, '_blank');
    };

    return (
        <button className="fab" onClick={handleDownload} title="Download Resume as PDF">
            <i className="bi bi-download"></i>
        </button>
    );
};

export default Fab;