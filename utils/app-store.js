import cartReducer from "./cart-slice"

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
})
export default appStore