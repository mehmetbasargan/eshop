import { getTrendingProducts } from '@/helpers';
import Title from './Title';
import { ProductsType } from '../../type';
import ProductsData from './ProductsData';
import { Toaster } from 'react-hot-toast';

const TrendingProducts = async () => {
    const data = await getTrendingProducts();

    return (
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
    );
};

export default TrendingProducts;
