import React from 'react';
import { Link } from 'react-router-dom';
import './vertical.css'; // Import your CSS file for styling

const Vertical = () => {
    return (
        <div className="sidebar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Vertical;
