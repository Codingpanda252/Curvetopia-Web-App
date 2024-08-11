import React, { useState } from 'react';
import ShapeUploader from './components/ShapeUploader';
import ShapeDisplay from './components/ShapeDisplay';
import ShapeCompletion from './components/ShapeCompletion';
import './styles/App.css';

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
    };

    const completeShape = (file) => {
        const formData = new FormData();
        formData.append('shape', file);

        // Fetch the completed shape from the API
        fetch('https://api.example.com/complete', {
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
            <h1>Curvetopia</h1>
            <div className="shape-row">
                <ShapeUploader onUpload={uploadShape} />
                <ShapeDisplay paths={regularizedPaths} title="Regularized Paths" />
                <ShapeCompletion onComplete={completeShape} />
            </div>
            <div className="shape-row">
                <ShapeDisplay paths={symmetryPaths} title="Symmetry Paths" />
                <ShapeDisplay paths={completedPaths} title="Completed Paths" />
            </div>
        </div>
    );
};

export default App;
