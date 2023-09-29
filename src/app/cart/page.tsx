'use client';
import CartItem from '@/components/CartItem';
import PageHeader from '@/components/PageHeader';
import PaymentForm from '@/components/PaymentForm';
import { resetCart } from '@/redux/shoppingSlice';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import img3 from '../../../public/images/shop/shop.jpeg';
import { StateProps } from '../../../type';

const CartPage = () => {
    const { productData } = useSelector((state: StateProps) => state?.shopping);
    const dispatch = useDispatch();

    return (
        <>
            <div className="">
                <PageHeader ImageProp={img3}>Cart</PageHeader>
            </div>

            <div className="container">
                {productData.length > 0 ? (
                    <div className="">
                        <div className="container pt-[100px] pb-[50px]">
                            <CartItem />

                            <div className=" flex justify-end w-full">
                                <button
                                    onClick={() => dispatch(resetCart())}
                                    className="bg-secondaryColor font-bold py-4 px-4 text-primaryColor text-[14px] uppercase rounded-md mt-5 hover:bg-primaryColor hover:text-white transition duration-300"
                                >
                                    reset cart
                                </button>
                            </div>
                        </div>

                        {/* Payment */}
                        <PaymentForm />
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center border-[1px] xl:py-[300px] lg:py-[200px] mt-[70px] mb-[70px]  ">
                        <p className="text-[30px] font-light">
                            Your Product cart is currently emty.
                        </p>
                        <Link
                            href="/shop"
                            className="bg-secondaryColor py-4 px-6 rounded-md hover:bg-primaryColor cursor-pointer hover:text-white transition duration-300 mt-4"
                        >
                            Return to Shop
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartPage;
