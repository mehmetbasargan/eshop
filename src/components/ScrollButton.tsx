'use create';

import { useEffect } from 'react';

const ScrollButton = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <button
            onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
            style={{
                position: 'fixed',
                padding: '1rem 2rem',
                fontSize: '20px',
                bottom: '40px',
                right: '40px',
                backgroundColor: '#0C9',
                color: '#fff',
                textAlign: 'center',
            }}
        >
            Scroll to top
        </button>
    );
};

export default ScrollButton;
