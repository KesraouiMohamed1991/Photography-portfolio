/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import './Ring.css'; // Import your CSS file for styling
import { useState, useEffect } from 'react';

const Ring = ({ text }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        setCharacters(text.split(''));
    }, [text]);

    const calculateRotation = (index, totalCharacters) => {
        const angle = (index * (360 / totalCharacters)) * (Math.PI / 180);
        const radius = 100; // Adjust the radius as needed
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return { x, y };
    };

    return (
        <div className="ring-container">
           <span className='animate-spin'>      ←</span>
            {characters.map((char, index) => {
                const { x, y } = calculateRotation(index, characters.length);
                return (
                    <motion.span
                        key={index}
                        className="rotating-char"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                            fontSize: '20px',
                            fontFamily: 'Poppins',
                            fill: '#000',
                        }}
                    >

                   
                        {char}

                    </motion.span>
                );
            })}
        </div>
    );
};

export default Ring;
