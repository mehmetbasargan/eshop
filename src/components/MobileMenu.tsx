import { menuItem } from '@/utils/data';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const activeSegment = useSelectedLayoutSegment();

    return (
        <div className="lg:hidden block">
            <nav>
                <ul
                    className={`${
                        !menuOpen
                            ? 'hidden'
                            : 'flex-col items-center gap-3 text-primaryColor absolute top-[68px] bg-white left-0 right-0 py-5 drop-shadow-lg border-t'
                    }`}
                >
                    <div className="container">
                        {menuItem.map((item) => (
                            <li
                                onClick={() => setMenuOpen(!menuOpen)}
                                key={item.id}
                                className="border-b last:border-b-0 py-4"
                            >
                                <Link
                                    href={item.link}
                                    className={`font-bold hover:text-secondaryColor transition-all duration-300 uppercase text-[14px] ${
                                        activeSegment === item.targetSegment
                                            ? 'text-secondaryColor font-bold'
                                            : ''
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </div>
                </ul>
            </nav>

            {/* Menu Toggle */}
            <div
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden block cursor-pointer"
            >
                <span>
                    {!menuOpen ? (
                        <AiOutlineMenu size={30} />
                    ) : (
                        <AiOutlineClose
                            size={30}
                            className="text-secondaryColor"
                        />
                    )}
                </span>
            </div>
        </div>
    );
};

export default MobileMenu;
