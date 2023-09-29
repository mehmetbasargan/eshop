import PageHeader from '@/components/PageHeader';

import ShopImg from '../../../public/images/shop/shop.jpeg';

const Contact = () => {
    return (
        <>
            <div className="">
                <PageHeader ImageProp={ShopImg}>Contact</PageHeader>
            </div>

            <div className="container py-[100px]">
                <div className="grid xl:grid-cols-3 gap-6 xl:w-[70%] mx-auto">
                    <div className="border-[1px] px-5 py-9 text-center flex flex-col justify-center items-center">
                        <span className="font-bold"> Address:</span>
                        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                    <div className="border-[1px] px-5 py-9 text-center flex flex-col justify-center items-center">
                        <span className="font-bold"> Phone:</span>
                        <p>+ 0000 000 00 00</p>
                    </div>
                    <div className="border-[1px] px-5 py-9 text-center flex flex-col justify-center items-center">
                        <span className="font-bold">Email:</span>
                        <a href="mailto: info@email.com" target="_blank">
                            info@email.com
                        </a>
                    </div>
                </div>

                <div className="mt-8  xl:w-[70%] mx-auto">
                    <div className="">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1232144.8720548267!2d27.907079487858493!3d40.11574389735296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1695979574973!5m2!1str!2str"
                            width="100%"
                            height="450"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
