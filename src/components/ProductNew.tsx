import { getProducts } from '@/helpers';
import { ProductsType } from '../../type';
import ProductsData from './ProductsData';
import Title from './Title';

const ProductNew = async () => {
    const procuctNew: ProductsType[] = await getProducts();

    return (
        <div>
            <div className="flex flex-col items-center justify-center py-9">
                <Title>New Products</Title>
                <span>New Arrival Products.</span>
            </div>

            <div className="container grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-5">
                {procuctNew.map(
                    (item, i) =>
                        i < 4 && (
                            <div key={item._id}>
                                {item.isNew && <ProductsData item={item} />}
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default ProductNew;
