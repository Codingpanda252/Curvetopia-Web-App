import React, { useEffect, useState } from 'react';
import '../styles/ShapeCompletion.css';

const ShapeCompletion = ({ paths }) => {
    const [completedPaths, setCompletedPaths] = useState([]);

    useEffect(() => {
        if (paths.length > 0) {
            const formData = new FormData();
            formData.append('file', paths);

            fetch('https://api.example.com/completion', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    setCompletedPaths(data.completedPaths);
                })
                .catch((error) => console.error('Error:', error));
        }
    }, [paths]);

    return (
        <div className="shape-completion">
            <h2>Completed Shape</h2>
            <div className="shape-display">
                {completedPaths.length > 0 ? (
                    <svg width="200" height="200">
                        {completedPaths.map((path, index) => (
                            <path key={index} d={path} stroke="black" fill="none" />
                        ))}
                    </svg>
                ) : (
                    <p>No completed shape available</p>
                )}
            </div>
        </div>
    );
};

export default ShapeCompletion;
