import { getProducts } from '@/helpers';
import { ProductsType } from '../../type';
import ProductsData from './ProductsData';

const Products = async () => {
    const products = await getProducts();

    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10">
                {products?.map((item: ProductsType) => (
                    <ProductsData item={item} key={item._id} />
                ))}
            </div>
        </div>
    );
};

export default Products;
