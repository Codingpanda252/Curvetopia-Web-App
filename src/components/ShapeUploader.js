import React from 'react';
import '../styles/ShapeUploader.css';

const ShapeUploader = ({ onUpload }) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        onUpload(file);
    };

    return (
        <div className="shape-uploader">
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button>Upload Shape</button>
        </div>
    );
};

export default ShapeUploader;
