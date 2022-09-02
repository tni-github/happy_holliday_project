import { configureStore } from "@reduxjs/toolkit";
import holidaysReducer from "./holidaysSlice";
import pictureReducer from "./pictureSlice";
import textReducer from './textSlice';

export const store = configureStore({
    reducer: {
        holidays: holidaysReducer,
        text: textReducer,
        picture: pictureReducer,
    }
})