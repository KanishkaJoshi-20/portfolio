import React, { useEffect, useState } from 'react'

// id, size, x, y, opacity, animationDuration, 
// id, size, x, y, delay, animationDuration, 



function StarBackground() {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    // Create stars when the component mounts
    useEffect(() => {
        createStars();
        createMeteors();

        const handleResize = () => {
            createStars();
            createMeteors();
        };

        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); }; // Cleanup on unmount
    }, []);
    


    const createStars = () => {
        const numberOfStars = Math.floor(
            window.innerWidth * window.innerHeight / 10000
        );
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                // x, y are positions in percentage
                x: Math.random() * 100,
                y: Math.random() * 100, // Percentage
                opacity: Math.random() * 0.5 + 0.5, // Between 0.5 and 1
                animationDuration: Math.random() * 4 + 2 // Between 2 and 6 seconds
            });
        }
        setStars(newStars);
    };
    const createMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                // x, y are positions in percentage
                x: Math.random() * 100,
                y: Math.random() * 20, // Percentage
                delay: Math.random() * 10, 
                animationDuration: Math.random() * 4 + 2 // Between 3 and 6 seconds
            });
        }
        setMeteors(newMeteors);
    };


    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {stars.map((star) => (
                <div key={star.id}
                    className='star animate-pulse-subtle' style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: `${star.opacity}`,
                        animationDuration: `${star.animationDuration}s`,
                    }}>
                </div>
            ))}
            {meteors.map((meteor) => (
                <div key={meteor.id}
                    className='meteor animate-meteor' style={{
                        width: `${meteor.size * 50}px`,
                        height: `${meteor.size *2}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDelay: `${meteor.delay}`,
                        animationDuration: `${meteor.animationDuration}s`,
                    }}>
                </div>
            ))}
        </div>
    )
}

export default StarBackground