import AboutComp from '@/components/About';
import Category from '@/components/Category';
import ProductNew from '@/components/ProductNew';
import Slider from '@/components/Slider';

export default async function Home() {
    return (
        <main>
            <Slider />
            <AboutComp />
            <ProductNew />
            <Category />
        </main>
    );
}
