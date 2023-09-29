'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="bg-primaryColor mt-11  text-center flex flex-col justify-between gap-7">
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="back-to-top bg-secondaryColor z-50 h-[50px] w-[50px] flex items-center justify-center rounded-full border-[6px] border-white absolute left-0 right-0 mx-auto mt-[-20px] hover:scale-110 transition duration-300"
                >
                    <MdKeyboardDoubleArrowUp size={25} />
                </button>
            )}

            <div className="container text-white w-[500px] pt-11">
                <h2 className="font-bold text-[28px] mt-2 text-white">
                    E-Shop
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium dolorum at natus minus sint tempore.
                </p>
            </div>

            <div className="mt-4">
                <ul className="flex items-center justify-center gap-4">
                    <li className="w-[40px] h-[40px] bg-white text-primaryColor flex items-center justify-center rounded-full hover:bg-secondaryColor transition duration-300">
                        <Link href="">
                            <FaFacebookF size={22} />
                        </Link>
                    </li>
                    <li className="w-[40px] h-[40px] bg-white text-primaryColor flex items-center justify-center rounded-full hover:bg-secondaryColor transition duration-300">
                        <Link href="">
                            <AiOutlineInstagram size={22} />
                        </Link>
                    </li>
                    <li className="w-[40px] h-[40px] bg-white text-primaryColor flex items-center justify-center rounded-full hover:bg-secondaryColor transition duration-300">
                        <Link href="">
                            <AiOutlineYoutube size={22} />
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="bg-white/10 h-[50px] text-white">
                <span className="text-[13px] flex items-center justify-center h-full">
                    Copyright &copy; 2023 All rights reserved
                </span>
            </div>
        </div>
    );
};

export default Footer;
