import PageHeader from '@/components/PageHeader';
import SignleProduct from '@/components/SignleProduct';
import { getSingleProudct, getTrendingProducts } from '@/helpers';
import ShopImg from '../../../public/images/shop/shop.jpeg';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

const ProductPage = async ({ searchParams }: Props) => {
    const _idString = searchParams?._id;
    const _id = Number(_idString);
    const product = getSingleProudct(_id);
    const data = await getTrendingProducts();

    return (
        <div>
            <div className="">
                <PageHeader ImageProp={ShopImg}>Product Detail</PageHeader>
            </div>

            <SignleProduct product={product} />
        </div>
    );
};

export default ProductPage;
