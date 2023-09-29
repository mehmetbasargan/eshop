import AboutComp from '@/components/About';
import PageHeader from '@/components/PageHeader';
import ShopImg from '../../../public/images/shop/shop.jpeg';

const AboutPage = () => {
    return (
        <>
            <div className="">
                <PageHeader ImageProp={ShopImg}>Cart</PageHeader>
            </div>

            <div className="">
                <AboutComp />
            </div>

            <div className="container py-[100px]">
                <div className="xl:w-[55%] mx-auto flex flex-col gap-5 font-light">
                    <h2 className="text-[30px] uppercase font-bold">
                        Beatae necessitatibus
                    </h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae doloremque eveniet animi neque
                        reiciendis. Ipsam voluptatem aperiam, porro ipsa
                        deserunt ab architecto voluptates incidunt accusamus nam
                        adipisci id facilis aliquid.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates aliquam rem doloribus, atque minus officia
                        sunt cupiditate qui totam quod unde eius autem.
                        Voluptate consequuntur illum, consequatur reprehenderit
                        saepe ipsam dolorum id mollitia deserunt similique
                        laborum quasi architecto facilis repellendus accusamus
                        corrupti non dolorem beatae aliquam omnis itaque,
                        perspiciatis quibusdam! Aperiam placeat asperiores in
                        odit. Sint voluptatem quaerat atque, reprehenderit eaque
                        obcaecati, incidunt distinctio error neque illum,
                        aperiam nesciunt possimus perspiciatis doloremque ipsum.
                        Libero aut magnam fuga sed rem, placeat maiores, itaque
                        expedita explicabo optio consequuntur fugit dolores
                        accusantium! Beatae necessitatibus consectetur quae et
                        repudiandae, nemo nesciunt accusamus illum laboriosam
                        officiis, sint praesentium doloribus pariatur temporibus
                        quia dolor blanditiis vitae asperiores illo natus nisi
                        sunt incidunt? Aliquid porro dolor, laboriosam maiores
                        accusantium atque explicabo voluptatem, quo commodi
                        iste, ratione excepturi perferendis delectus ut.
                        Praesentium et nam natus quo architecto alias quae
                        beatae ex! Doloremque alias dolorem fugit ullam sequi
                        tenetur repellat unde! Et, eius! Porro, quidem! Ut illo
                        eos molestiae deleniti magnam, libero delectus nesciunt
                        suscipit, porro eligendi harum, aspernatur mollitia
                        ratione. Repellendus, doloremque amet unde nulla
                        accusantium reiciendis beatae esse asperiores ex optio
                        fugit dolore molestiae magni totam vel impedit dolor
                        provident blanditiis ad rerum non dolorem voluptate!
                        Facilis!
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae doloremque eveniet animi neque
                        reiciendis. Ipsam voluptatem aperiam, porro ipsa
                        deserunt ab architecto voluptates incidunt accusamus nam
                        adipisci id facilis aliquid.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
