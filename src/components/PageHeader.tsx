import Image from 'next/image';
import Link from 'next/link';

interface Props {
    children: React.ReactNode;
    className?: string;
    ImageProp?: string | any;
}

const PageHeader = ({ children, className, ImageProp }: Props) => {
    return (
        <div className="relative">
            <div className="w-full">
                <Image
                    src={ImageProp}
                    width={1280}
                    height={400}
                    alt="img"
                    className="w-full h-[400px] object-cover"
                />
                <div className="bg-primaryColor/20 w-full h-full absolute left-0 top-0" />
            </div>
            <div className="w-full absolute top-[50%] flex flex-col items-center justify-center">
                <ul className="flex items-center uppercase gap-2 ">
                    <li className="font-light text-[14px]">
                        <Link href="/" className="hover:text-secondaryColor">
                            Home
                        </Link>
                    </li>
                    <li>-</li>
                    <li className=" text-[14px]">{children}</li>
                </ul>
                <h2
                    className={`${className} text-[30px] font-extrabold uppercase`}
                >
                    {children}
                </h2>
            </div>
        </div>
    );
};

export default PageHeader;
