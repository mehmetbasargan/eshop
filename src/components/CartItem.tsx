import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsType, StateProps } from '../../type';
import FormattedPrice from './FormattedPrice';

import {
    decreaseQuantity,
    deleteProduct,
    increaseQuantity,
} from '@/redux/shoppingSlice';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';

const CartItem = () => {
    const { productData } = useSelector((state: StateProps) => state?.shopping);
    const dispatch = useDispatch();

    return (
        <>
            <div className="bg-secondaryColor md:flex items-center justify-between py-6 px-6 text-white text-center w-full hidden">
                <div className="flex-1"></div>
                <div className="flex-1"></div>
                <div className="flex-1">Product</div>
                <div className="flex-1">Price</div>
                <div className="flex-1">Quantity</div>
                <div className="flex-1">Total</div>
            </div>

            <div className="">
                {/* Item */}
                {productData.map((item: ProductsType) => (
                    <div
                        key={item._id}
                        className="border-b-[1px] border-primaryColor/[8px] md:!flex xl:items-center xl:justify-between justify-center items-center py-11 px-6 w-full"
                    >
                        <div className="flex-1 flex xl:text-start text-center items-center justify-center transition duration-300 cursor-pointer w-full mb-3">
                            <div
                                onClick={() =>
                                    dispatch(deleteProduct(item._id))
                                }
                                className="bg-secondaryColor w-[30px] h-[30px] flex items-center justify-center hover:bg-secondaryColor/60"
                            >
                                <GrFormClose />
                            </div>
                        </div>
                        <div className="flex-1 flex xl:text-start text-center items-center justify-center mb-3">
                            <Image
                                src={item.image}
                                width={70}
                                height={70}
                                alt={item.title}
                                className="w-[70px] h-[70px] object-cover object-left-top"
                            />
                        </div>
                        <div className="flex-1 text-center mb-3">
                            <Link href={`/product/${item._id}`}>
                                <h3 className="font-bold text-[14px] uppercase">
                                    {item.title}
                                </h3>
                            </Link>
                            <p className="font-light text-[14px] mb-3">
                                {item.description.substring(0, 50)}...
                            </p>
                        </div>
                        <div className="flex-1 text-center font-bold mb-3">
                            <FormattedPrice amount={item.price} />
                        </div>
                        <div className="xl:flex-1 flex items-center justify-center gap-4 mb-3 border-[1px] py-3 w-[100px] mx-auto">
                            <span
                                onClick={() => dispatch(decreaseQuantity(item))}
                                className="cursor-pointer hover:text-secondaryColor transition duration-300"
                            >
                                <BiMinus />
                            </span>
                            <span>{item.quantity}</span>
                            <span
                                onClick={() => dispatch(increaseQuantity(item))}
                                className="cursor-pointer hover:text-secondaryColor transition duration-300"
                            >
                                <BiPlus />
                            </span>
                        </div>
                        <div className="flex-1 text-center font-bold  mb-3">
                            <FormattedPrice
                                amount={item.price * item.quantity}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CartItem;
