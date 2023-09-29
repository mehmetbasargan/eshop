import { createSlice } from '@reduxjs/toolkit';
import { ProductsType } from '../../type';

interface StoreState {
    productData: ProductsType[];
    userInfo: null | string;
    orderData: [];
}

const initialState: StoreState = {
    productData: [],
    userInfo: null,
    orderData: [],
};

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        /* Add To Cart */
        addToCart: (state, action) => {
            const existingProduct = state.productData.find(
                (item: ProductsType) => item._id === action.payload._id
            );
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },
        /* increase Quantity */
        increaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: ProductsType) => item._id === action.payload._id
            );
            existingProduct && existingProduct.quantity++;
        },
        /* decrease Quantity */
        decreaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: ProductsType) => item._id === action.payload._id
            );
            if (existingProduct?.quantity === 1) {
                existingProduct.quantity === 1;
            } else {
                existingProduct && existingProduct.quantity--;
            }
        },
        /* delete products */
        deleteProduct: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        /* reset cart */
        resetCart: (state) => {
            state.productData = [];
        },
        /* Add User */
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        /* Delete User */
        deleteUser: (state) => {
            state.userInfo = null;
        },
    },
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    resetCart,
    addUser,
    deleteUser,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
