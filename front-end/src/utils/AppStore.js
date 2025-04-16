import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./AppSlice";

const appStore=configureStore({
    reducer:{
        cart:cartSlice
    }

});
export default appStore;