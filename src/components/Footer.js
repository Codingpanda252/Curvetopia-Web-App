import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 Curvetopia. All rights reserved.</p>
            <p>
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
                <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
        </footer>
    );
};

export default Footer;
