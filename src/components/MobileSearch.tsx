import { useClickOutside } from '@mantine/hooks';
import { useState } from 'react';
import { RiSearchFill, RiSearchLine } from 'react-icons/ri';

const MobileSearch = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const closeSearchOpen = useClickOutside(() => setSearchOpen(false));
    return (
        <div className="lg:hidden block cursor-pointer">
            <span onClick={() => setSearchOpen(!searchOpen)}>
                {!searchOpen ? (
                    <RiSearchLine size={25} />
                ) : (
                    <RiSearchFill size={25} className="text-secondaryColor" />
                )}
            </span>
            <div ref={closeSearchOpen} className="">
                <div
                    className={`${
                        !searchOpen
                            ? 'hidden'
                            : 'absolute top-[68px] bg-white left-0 right-0 drop-shadow-lg py-5 w-full border-t'
                    }`}
                >
                    <form className="container w-[100%]">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-[100%] p-2 focus:outline-none border-[1px] rounded-full px-6"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MobileSearch;
