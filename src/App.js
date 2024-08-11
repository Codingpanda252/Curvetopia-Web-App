import React, { useState } from 'react';
import ShapeUploader from './components/ShapeUploader';
import ShapeDisplay from './components/ShapeDisplay';
import ShapeCompletion from './components/ShapeCompletion';
import Footer from './components/Footer'; 
import './styles/App.css';

const App = () => {
    const [regularizedPaths, setRegularizedPaths] = useState([]);
    const [symmetryPaths, setSymmetryPaths] = useState([]);
    const [completedPaths, setCompletedPaths] = useState([]);
    const [error, setError] = useState(null);

    const uploadShape = async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const regularizedResponse = await fetch('https://adobe-qsrq.onrender.com/upload', {
                method: 'POST',
                body: formData,
            });

            if (!regularizedResponse.ok) {
                throw new Error('Failed to fetch regularized shape');
            }

            const regularizedData = await regularizedResponse.json();
            setRegularizedPaths(regularizedData.regularizedPaths);

            // Fetch the symmetry
            const symmetryResponse = await fetch('https://adobe-qsrq.onrender.com/process_csv', {
                method: 'POST',
                body: formData,
            });

            if (!symmetryResponse.ok) {
                throw new Error('Failed to fetch symmetry data');
            }

            const symmetryData = await symmetryResponse.json();
            setSymmetryPaths(symmetryData.symmetryPaths);

            const completionResponse = await fetch('https://adobe-qsrq.onrender.com/completion', {
                method: 'POST',
                body: formData,
            });

            if (!completionResponse.ok) {
                throw new Error('Failed to fetch shape completion');
            }

            const completionData = await completionResponse.json();
            setCompletedPaths(completionData.completedPaths);

        } catch (error) {
            setError(error.message);
            console.error('Error:', error);
        }
    };

    return (
        <div className="app">
            <h1>Curvetopia Web App</h1>
            <ShapeUploader onUpload={uploadShape} />
            {error && <div className="error">{error}</div>} 
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
            <Footer /> 
        </div>
    );
};

export default App;
