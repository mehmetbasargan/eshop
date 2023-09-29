'use client';
import Image from 'next/image';
import { ItemProps } from '../../type';

import { calculatePercent } from '@/helpers';
import { addToCart } from '@/redux/shoppingSlice';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosStar } from 'react-icons/io';
import { MdShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import FormattedPrice from './FormattedPrice';

const ProductsData = ({ item }: ItemProps) => {
    const dispatch = useDispatch();

    const starIcons = Array.from({ length: item.rating }, (_, index) => (
        <span key={index} className="text-secondaryColor drop-shadow-sm">
            <IoIosStar size={21} />
        </span>
    ));

    return (
        <div className="group relative">
            <Link href={{ pathname: '/product', query: { _id: item?._id } }}>
                <div className="w-full overflow-hidden cursor-pointer">
                    <Image
                        src={item.image}
                        width={400}
                        height={400}
                        alt={item.title}
                        priority
                        className="h-[400px] w-full object-cover group-hover:scale-110 duration-200 relative"
                    />
                </div>
            </Link>

            <div className="absolute top-[60%] left-0 right-0 flex justify-center z-50 group-hover:transition-all group-hover:duration-300">
                <div className="hidden group-hover:block ">
                    <button
                        onClick={() =>
                            dispatch(addToCart(item)) &&
                            toast.success(
                                `${item?.title.substring(
                                    0,
                                    15
                                )} added successfully!`
                            )
                        }
                        className="bg-primaryColor text-white uppercase text-[14px] px-3 py-3 rounded-full flex items-center gap-2 hover:bg-secondaryColor hover:text-primaryColor transition-all duration-300"
                    >
                        <span className="uppercase font-bold">Add to cart</span>
                        <span>
                            <MdShoppingCart size={15} />
                        </span>
                    </button>
                </div>
            </div>

            <div className="absolute top-0">
                {item.isNew && (
                    <div className="bg-secondaryColor text-primaryColor font-bold text-[14px] w-auto h-[40px] flex items-center justify-center px-3 rounded-br-[20px] drop-shadow-sm">
                        <span>New</span>
                    </div>
                )}
            </div>

            <div className="bg-black/[0.03] p-5">
                <div className="flex items-center justify-between">
                    <span className="text-[13px] uppercase">
                        {item.category}
                    </span>
                    <span className="flex gap-1">{starIcons}</span>
                </div>
                <div className="mt-3">
                    <h2 className="text-[14px] mb-2 font-bold uppercase">
                        {item.title}
                    </h2>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            <span className="line-through text-black/20">
                                <FormattedPrice amount={item.oldPrice} />
                            </span>
                            <span>
                                <FormattedPrice amount={item.price} />
                            </span>
                        </div>

                        <div className="uppercase text-[12px] font-bold bg-secondaryColor py-1 px-2 mr-[-19px] rounded-bl-[8px] rounded-tl-[8px]">
                            {calculatePercent(item.price, item.oldPrice)}% off
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default ProductsData;
