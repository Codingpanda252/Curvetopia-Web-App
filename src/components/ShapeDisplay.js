import React from 'react';
import '../styles/ShapeDisplay.css';

const ShapeDisplay = ({ paths, title }) => {
    return (
        <div className="shape-display">
            <h3>{title}</h3>
            <svg viewBox="0 0 100 100" className="shape-svg">
                {paths.map((path, index) => (
                    <path key={index} d={path} stroke="black" strokeWidth="0.5" fill="none" />
                ))}
            </svg>
        </div>
    );
};

export default ShapeDisplay;
