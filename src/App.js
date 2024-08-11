import React, { useState } from 'react';
import ShapeUploader from './components/ShapeUploader';
import ShapeDisplay from './components/ShapeDisplay';
import ShapeCompletion from './components/ShapeCompletion';
import Footer from './components/Footer'; 
import './App.css';

const App = () => {
    const [regularizedPaths, setRegularizedPaths] = useState([]);
    const [symmetryPaths, setSymmetryPaths] = useState([]);
    const [completedPaths, setCompletedPaths] = useState([]);

    const uploadShape = (file) => {
        const formData = new FormData();
        formData.append('shape', file);

        // Fetch the regularized shape from the API
        fetch('https://api.example.com/regularize', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setRegularizedPaths(data.regularizedPaths);
            })
            .catch((error) => console.error('Error:', error));

        // Fetch the symmetry from the API
        fetch('https://api.example.com/symmetry', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setSymmetryPaths(data.symmetryPaths);
            })
            .catch((error) => console.error('Error:', error));

        // Fetch the shape completion from the API
        fetch('https://api.example.com/completion', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setCompletedPaths(data.completedPaths);
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div className="app">
            <h1>Curvetopia Web App</h1>
            <ShapeUploader onUpload={uploadShape} />
            <div className="shape-row">
                <div>
                    <h2>Regularized Shape</h2>
                    <ShapeDisplay paths={regularizedPaths} />
                </div>
                <div>
                    <h2>Symmetry Identified</h2>
                    <ShapeDisplay paths={symmetryPaths} />
                </div>
                <div>
                    <h2>Shape Completion</h2>
                    <ShapeCompletion paths={completedPaths} />
                </div>
            </div>
            <Footer /> {/* Add Footer */}
        </div>
    );
};

export default App;
