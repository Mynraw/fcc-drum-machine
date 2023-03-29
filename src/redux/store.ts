import { configureStore } from "@reduxjs/toolkit";
import drumSlice from "./drumSlice";

export default configureStore({
    reducer: {
        drum: drumSlice,
    }
})