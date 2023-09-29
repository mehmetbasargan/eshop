import { FaPhone } from 'react-icons/fa6';
import { LiaTelegramPlane } from 'react-icons/lia';

const Topbar = () => {
    return (
        <div className="bg-black py-2 text-white hidden lg:block">
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <FaPhone size={18} />
                    <span className="text-[13px]">+90 000 000 00 00</span>
                </div>
                <div className="flex items-center gap-3">
                    <LiaTelegramPlane size={18} />
                    <span>info@email.com</span>
                </div>
                <div className="">
                    <p className="text-[13px]">
                        3-5 BUSINESS DAYS DELIVERY & FREE RETURNS
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
