import { configureStore } from "@reduxjs/toolkit";
import userReduser from "@/redux/slices/user/slice";
import productsReducer from '@/redux/slices/products/clice'
import postsReducer from '@/redux/slices/posts/clice'

export const store = configureStore({
    reducer: {
        user: userReduser,
        products: productsReducer,
        posts: postsReducer,
    }
})