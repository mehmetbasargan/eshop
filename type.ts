export interface ProductsType {
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: number;
    quantity: number;
}

export interface ItemProps {
    item: ProductsType;
}

export interface StateProps {
    shopping: {
        productData: [];
        userInfo: {};
        orderData: {
            order: ProductsType[];
        };
    };
}

export interface SingleType {
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: number;
    quantity: number;
}
