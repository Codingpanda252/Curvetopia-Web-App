import React, { useState } from 'react';
import '../styles/ShapeUploader.css';

const ShapeUploader = ({ onUpload }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUploadClick = () => {
        if (selectedFile) {
            onUpload(selectedFile);
        } else {
            alert('Please select a file first.');
        }
    };

    return (
        <div className="shape-uploader">
            <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="shape-uploader-input"
            />
            <button
                type="button"
                onClick={handleUploadClick}
                className="shape-uploader-button"
            >
                Upload Shape
            </button>
        </div>
    );
};

export default ShapeUploader;
