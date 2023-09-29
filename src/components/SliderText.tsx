import { motion } from 'framer-motion';

interface Props {
    title: string;
}

const SliderText = ({ title }: Props) => {
    return (
        <div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
            <div className="container flex flex-col h-full gap-6 justify-center">
                <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-7xl  text-white font-bold"
                >
                    {title}
                </motion.h2>

                <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg text-slate-100"
                >
                    Stock up on sportswear and limited edition collections on
                    our <br />
                    awesome mid-season sale.
                </motion.p>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="flex gap-2"
                >
                    <button className="py-3 px-6 rounded-full bg-secondaryColor hover:bg-primaryColor hover:text-white duration-300 text-sm uppercase font-semibold">
                        Find out more
                    </button>
                    <button className="py-3 px-6 rounded-full bg-secondaryColor hover:bg-primaryColor hover:text-white duration-300 text-sm uppercase font-semibold">
                        Shop Now
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default SliderText;
