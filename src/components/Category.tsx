import { getProducts } from '@/helpers';
import { ProductsType } from '../../type';
import ProductsData from './ProductsData';
import Title from './Title';

const Category = async () => {
    const procuctCategory: ProductsType[] = await getProducts();

    return (
        <div className="container mt-[100px]">
            <div className="flex flex-col items-center justify-center py-9">
                <Title>Men&apos;s Products</Title>
                <span>New Arrival Products.</span>
            </div>

            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-5">
                {procuctCategory.map(
                    (item) =>
                        item.category === 'men' && (
                            <div className="" key={item._id}>
                                <ProductsData item={item} />
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default Category;
