'use client';
import Slider from 'react-slick';

import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

import Image from 'next/image';
import img1 from '../../public/images/bannerone.jpg';
import img3 from '../../public/images/bannerthree.jpg';
import img2 from '../../public/images/bannertwo.jpg';
import SliderText from './SliderText';

const SliderComp = () => {
    const NextArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                onClick={onClick}
                className="bg-secondaryColor text-white w-[50px] h-[50px] flex items-center justify-center rounded-full absolute top-[50%] left-[20px] hover:bg-primaryColor transition-all duration-300 cursor-pointer"
            >
                <MdOutlineKeyboardArrowLeft size={30} />
            </div>
        );
    };
    const PrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                onClick={onClick}
                className="bg-secondaryColor text-white w-[50px] h-[50px] flex items-center justify-center rounded-full absolute top-[50%] right-[20px] z-50  hover:bg-primaryColor transition-all duration-300 cursor-pointer"
            >
                <MdOutlineKeyboardArrowRight size={30} />
            </div>
        );
    };

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="relative z-10">
            <Slider {...settings}>
                <div className="w-full h-full relative">
                    <Image
                        src={img1}
                        alt="img"
                        width={1500}
                        height={700}
                        className="w-full h-[700px] object-cover object-right-top"
                    />
                    <SliderText title="Outware Picks" />
                </div>
                <div className="w-full h-full relative">
                    <Image
                        src={img2}
                        alt="img"
                        width={1500}
                        height={700}
                        className="w-full h-[700px] object-cover object-right-top"
                    />
                    <SliderText title="Seasonal Offers" />
                </div>
                <div className="w-full h-full relative">
                    <Image
                        src={img3}
                        alt="img"
                        width={1500}
                        height={700}
                        className="w-full h-[700px] object-cover object-right-top"
                    />
                    <SliderText title="Best for women" />
                </div>
            </Slider>
        </div>
    );
};

export default SliderComp;
