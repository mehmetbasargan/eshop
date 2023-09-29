import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="container flex flex-col items-center justify-center py-[200px] max-w-[500px]">
            <h2 className="font-bold text-[35px]">Your pages not found!</h2>
            <p className="text-base font-light text-center text-[14px]">
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
            </p>
            <Link
                href={'/'}
                className="bg-black text-slate-100 w-44 h-12 rounded-full !font-light flex items-center justify-center hover:bg-secondaryColor hover:text-white duration-200 mt-5"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
