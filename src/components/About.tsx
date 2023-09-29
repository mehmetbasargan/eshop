import Title from '@/components/Title';
import { GoDiscussionClosed } from 'react-icons/go';
import { LuBaggageClaim } from 'react-icons/lu';
import { RiSecurePaymentFill } from 'react-icons/ri';

const AboutComp = () => {
    return (
        <div className="bg-primaryColor/[0.03] mt-[-7px]">
            <div className="container xl:w-[60%] lg:w-[60%] flex items-center justify-center h-full ">
                <div className="grid xl:grid-cols-3  xl:gap-2 gap-7 py-[60px]">
                    <div className="flex flex-col items-center justify-center text-center gap-1">
                        <LuBaggageClaim size={50} />
                        <Title className="!text-[22px]">Free Shipping</Title>
                        <p className="text-primaryColor/[0.5] text-[14px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reprehenderit cupiditate animi numquam natus,
                            quibusdam nulla consequatur.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-1">
                        <GoDiscussionClosed size={50} />
                        <Title className="!text-[22px]">Support Customer</Title>
                        <p className="text-primaryColor/[0.5] text-[14px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reprehenderit cupiditate animi numquam natus,
                            quibusdam nulla consequatur.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-1">
                        <RiSecurePaymentFill size={50} />
                        <Title className="!text-[22px]">Secure Payments</Title>
                        <p className="text-primaryColor/[0.5] text-[14px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reprehenderit cupiditate animi numquam natus,
                            quibusdam nulla consequatur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutComp;
