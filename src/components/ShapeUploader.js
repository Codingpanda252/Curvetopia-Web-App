import React from 'react';
import '../styles/ShapeUploader.css';

const ShapeUploader = ({ onUpload }) => {
    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            onUpload(e.target.files[0]);
        }
    };

    return (
        <div className="shape-uploader">
            <input type="file" accept=".svg" onChange={handleFileChange} />
        </div>
    );
};

export default ShapeUploader;
