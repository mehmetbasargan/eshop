'use client';
import FormattedPrice from '@/components/FormattedPrice';
import PageHeader from '@/components/PageHeader';
import ProductsData from '@/components/ProductsData';
import Title from '@/components/Title';
import { getSingleProduct, getTrendingProducts } from '@/helpers';
import { addToCart } from '@/redux/shoppingSlice';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosStar } from 'react-icons/io';
import { MdShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import ShopImg from '../../../../public/images/shop/shop.jpeg';
import { ProductsType, SingleType } from '../../../../type';

type Props = {
    params: { [key: string]: string | string[] | undefined };
};

const ProductDetail = async ({ params }: Props) => {
    const dispatch = useDispatch();
    const _idString = params?.id;
    const _id = Number(_idString);
    const product: SingleType | any = getSingleProduct(_id);
    const data = await getTrendingProducts();

    const starIcons = Array.from({ length: product.rating }, (_, index) => (
        <span key={index} className="text-secondaryColor drop-shadow-sm">
            <IoIosStar size={21} />
        </span>
    ));

    return (
        <>
            <div className="">
                <div className="">
                    <PageHeader ImageProp={ShopImg}>Product Detail</PageHeader>
                </div>
                <div className="container mt-[100px] grid xl:grid-cols-2 lg:grid-cols-2 items-center gap-10">
                    {/* left image */}
                    <div className="w-full relative">
                        <Image
                            src={product?.image}
                            width={500}
                            height={600}
                            alt={product?.title}
                            className="w-full h-[600px] object-cover object-left-top"
                        />
                        <div className="absolute top-0">
                            {product.isNew && (
                                <div className="bg-secondaryColor text-primaryColor font-bold text-[14px] w-auto h-[40px] flex items-center justify-center px-3 rounded-br-[20px] drop-shadow-sm">
                                    <span>New</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* right content */}
                    <div className="">
                        <h2 className="uppercase text-[30px] font-semibold">
                            {product.title}
                        </h2>

                        <div className="">
                            <div className="">
                                <span className="text-[13px] uppercase">
                                    Category:
                                    <span className="font-bold ml-2">
                                        {product.category}
                                    </span>
                                </span>
                                <span className="flex gap-1 mt-2">
                                    {starIcons}
                                </span>
                            </div>

                            <div className="text-sm text-primaryColor/40 mt-3">
                                <span>
                                    SKU:
                                    <span className="font-bold ml-2">
                                        {product._id}
                                    </span>
                                </span>
                            </div>

                            <div className="flex items-center justify-between mt-5">
                                <div className="flex gap-2">
                                    <span className="line-through text-black/20 text-[26px]">
                                        <FormattedPrice
                                            amount={product.oldPrice}
                                        />
                                    </span>
                                    <span className="text-[26px] font-bold">
                                        <FormattedPrice
                                            amount={product.price}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <p className="text-black/50">
                                {product.description}
                            </p>
                        </div>

                        <div className="mt-7">
                            <button
                                onClick={() =>
                                    dispatch(addToCart(product)) &&
                                    toast.success(
                                        `${product?.title.substring(
                                            0,
                                            15
                                        )} added successfully!`
                                    )
                                }
                                className="bg-primaryColor text-white uppercase text-[14px] py-4 px-5 rounded-full flex items-center gap-2 hover:bg-secondaryColor hover:text-primaryColor transition duration-300"
                            >
                                Add to cart
                                <span>
                                    <MdShoppingCart size={20} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-[60px]">
                <div className="flex flex-col items-center justify-center py-9">
                    <Title>Trending Products</Title>
                    <span>New Arrival Products.</span>
                </div>

                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-5">
                    {data.map((item: ProductsType) => (
                        <ProductsData key={item._id} item={item} />
                    ))}
                </div>
                <Toaster />
            </div>
        </>
    );
};

export default ProductDetail;
