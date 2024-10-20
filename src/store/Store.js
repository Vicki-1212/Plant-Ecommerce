import {configureStore} from '@reduxjs/toolkit'

import cartSlice from '../cart_slice/cartSlice'

export const Store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})

export default Store;