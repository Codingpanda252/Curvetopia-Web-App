import React, { useState } from 'react';
import '../styles/ShapeCompletion.css';

const ShapeCompletion = ({ onComplete }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleCompleteClick = () => {
        if (file) {
            onComplete(file);
        }
    };

    return (
        <div className="shape-completion">
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleCompleteClick}>Complete Shape</button>
        </div>
    );
};

export default ShapeCompletion;
