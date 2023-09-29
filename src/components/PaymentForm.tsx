'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductsType, StateProps } from '../../type';
import FormattedPrice from './FormattedPrice';
import Title from './Title';

const PaymentForm = () => {
    const { productData, userInfo } = useSelector(
        (state: StateProps) => state?.shopping
    );

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
        <div className="container">
            <div className="border-[1px] border-black/20 py-3 px-5 xl:w-[30%] lg:w-[40%]">
                <Title className="!text-[25px] uppercase">Cart Totals</Title>

                <div className="mt-5">
                    <ul className="flex flex-col gap-5 border-b pb-5">
                        <li className="flex items-center justify-between">
                            <span className="uppercase w-[100px] text-[14px]">
                                Subtotal
                            </span>
                            <span className="">
                                <FormattedPrice amount={totalAmt} />
                            </span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="uppercase w-[100px] text-[14px]">
                                Delivery
                            </span>
                            <span className="">
                                <FormattedPrice amount={20} />
                            </span>
                        </li>
                    </ul>
                    <div className="py-4 mt-2 flex items-center justify-between">
                        <span className="uppercase">Total</span>
                        <span className="font-bold">
                            <FormattedPrice amount={totalAmt + 20} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                {userInfo ? (
                    <div className="bg-secondaryColor py-4 px-6 inline-block rounded-md hover:bg-primaryColor cursor-pointer hover:text-white transition duration-300">
                        Proceed to Checkout
                    </div>
                ) : (
                    <>
                        <div className="bg-secondaryColor py-4 px-6 inline-block rounded-md hover:bg-primaryColor cursor-not-allowed hover:text-white transition duration-300">
                            Proceed to Checkout
                        </div>
                        <p className="text-red-500 mt-1 text-[14px] font-semibold animate-bounce">
                            Please login to continue
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default PaymentForm;
