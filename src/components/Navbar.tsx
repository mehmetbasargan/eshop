'use client';
import { menuItem } from '@/utils/data';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useState } from 'react';

import { addUser, deleteUser } from '@/redux/shoppingSlice';
import { FiLogIn } from 'react-icons/fi';
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineLogout,
    MdShoppingCart,
} from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsType, StateProps } from '../../type';
import FormattedPrice from './FormattedPrice';
import MobileMenu from './MobileMenu';
import MobileSearch from './MobileSearch';

const Navbar = () => {
    const dispatch = useDispatch();
    const activeSegment = useSelectedLayoutSegment();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { data: session } = useSession();
    const { productData } = useSelector((state: StateProps) => state.shopping);

    useEffect(() => {
        if (session) {
            dispatch(
                addUser({
                    name: session.user?.name,
                    email: session.user?.email,
                    image: session.user?.image,
                })
            );
        } else {
            dispatch(deleteUser());
        }
    }, [session, dispatch]);

    /* total price */
    const [totalAmt, settotalAmt] = useState(0);
    useEffect(() => {
        let amt = 0;
        productData.map((item: ProductsType) => {
            amt += item.price * item.quantity;
            return;
        });
        settotalAmt(amt);
    }, [productData]);

    return (
        <div className="border-b bg-white">
            <div className="container flex items-center justify-between py-4">
                {/* logo */}
                <div>
                    <Link href="/" className="flex items-center gap-1">
                        {/* <FaShop size={28} className="text-primaryColor" /> */}
                        <span className="font-bold text-[28px] mt-2 text-primaryColor">
                            E-Shop
                        </span>
                    </Link>
                </div>

                {/* Desktop search bar */}
                <div className="hidden lg:block">
                    <form className="flex items-center border border-primaryColor  px-7 rounded-full relative">
                        <input
                            type="text"
                            placeholder="Search Products..."
                            className="xl:w-[500px] lg:w-[410px] py-2 focus:outline-none pl-4 placeholder:text-black/40"
                        />
                        <span className="absolute left-[10px]">
                            <RiSearchLine
                                size={25}
                                className="text-primaryColor"
                            />
                        </span>
                    </form>
                </div>

                {/* menu */}
                <div className="flex items-center gap-2">
                    {/* Desktop Menu*/}
                    <div className="hidden lg:block">
                        <nav>
                            <ul className="flex items-center gap-3 text-primaryColor">
                                {menuItem.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.link}
                                            className={`font-bold hover:text-secondaryColor transition-all duration-300 uppercase text-[14px] ${
                                                activeSegment ===
                                                item.targetSegment
                                                    ? 'text-secondaryColor font-bold'
                                                    : ''
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Mobile Search */}
                    <MobileSearch />

                    {/* Mobile Menu */}
                    <MobileMenu />

                    {/* dropdown */}
                    <div className="relative cursor-pointer">
                        {/* user img */}
                        <span
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center"
                        >
                            {session && (
                                <>
                                    <div className="rounded-full ml-2">
                                        <Image
                                            src={session?.user?.image as string}
                                            width={35}
                                            height={35}
                                            alt={session?.user?.email as string}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <span>
                                        <MdOutlineKeyboardArrowDown />
                                    </span>
                                </>
                            )}
                        </span>

                        <div>
                            <div
                                className={`${
                                    !dropdownOpen
                                        ? 'hidden'
                                        : 'absolute top-[50px] right-0 bg-white drop-shadow-md py-3 px-5'
                                }`}
                            >
                                <ul className="flex flex-col gap-1 min-w-[150px]">
                                    <li className="py-1">
                                        {session?.user?.name}
                                    </li>
                                    <li className="">{session?.user?.email}</li>
                                    <li className="border-t">
                                        {/* Logout btn */}
                                        {session && (
                                            <div
                                                onClick={() => signOut()}
                                                className="flex items-center gap-1 pt-3 text-primaryColor hover:text-secondaryColor cursor-pointer transition-all duration-300"
                                            >
                                                <MdOutlineLogout size={22} />
                                                <p className="text-[13px] font-bold">
                                                    Logout
                                                </p>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Login Register */}
                    {!session && (
                        <div
                            className="flex items-center justify-center gap-1 cursor-pointer hover:bg-secondaryColor hover:text-primaryColor bg-primaryColor text-white transition-all duration-300 py-1 px-2 rounded-md"
                            onClick={() => signIn()}
                        >
                            <FiLogIn size={18} />
                            <p>Login</p>
                        </div>
                    )}

                    {/* shop */}
                    <div className="relative flex items-center">
                        {productData.length > 0 ? (
                            <div className="text-[12px] font-semibold w-auto px-2 h-[25px] bg-primaryColor text-white flex items-center justify-center rounded-md">
                                <FormattedPrice
                                    amount={totalAmt ? totalAmt : 0}
                                />
                            </div>
                        ) : (
                            ''
                        )}

                        <Link href="/cart">
                            <div className="hover:text-secondaryColor transition duration-300">
                                <MdShoppingCart size={30} />
                                <span className="absolute top-[-8px] right-[-4px] bg-red-500 w-5 h-5 rounded-[6px] text-white flex items-center justify-center text-[13px] font-bold">
                                    {productData ? productData.length : 0}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
