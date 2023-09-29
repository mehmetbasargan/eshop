import Category from '@/components/Category';
import ProductNew from '@/components/ProductNew';
import Slider from '@/components/Slider';
import About from './about/page';

export default async function Home() {
    return (
        <main>
            <Slider />
            <About />
            <ProductNew />
            <Category />
        </main>
    );
}
