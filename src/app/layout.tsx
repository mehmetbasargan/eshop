import 'slick-carousel/slick/slick.css';
import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { Urbanist } from 'next/font/google';
const urbanist = Urbanist({ subsets: ['latin'] });

import Layout from '@/components/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: 'E-Shop',
        default: 'E-Shop - A place for all!',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${urbanist.className} overflow-x-hidden`}>
                <Layout>
                    <Header />
                    {children}
                    <Footer />
                </Layout>
            </body>
        </html>
    );
}
