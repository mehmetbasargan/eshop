'use client';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';

const Header = () => {
    /* sticky header */
    const [headerActive, setHeaderActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setHeaderActive(true);
            } else {
                setHeaderActive(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`transition-all duration-500 z-50 relative ${
                headerActive &&
                'sticky top-0 drop-shadow-lg transition-all duration-500'
            }`}
        >
            <div
                className={` transition-all duration-500 ${
                    headerActive &&
                    'absolute !top-[-100px] transition-all duration-500'
                }`}
            >
                <Topbar />
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
