import PageHeader from '@/components/PageHeader';
import ProductsData from '@/components/ProductsData';
import { getProducts } from '@/helpers';
import { ProductsType } from '../../../type';

import img1 from '../../../public/images/shop/shop.jpeg';

const ShopPage = async () => {
    const products = await getProducts();

    return (
        <div>
            <div className="">
                <PageHeader ImageProp={img1}>Shop</PageHeader>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-[100px] container">
                {products?.map((item: ProductsType) => (
                    <ProductsData key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
