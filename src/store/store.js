import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk"
import catalogReducer from "./catalogSlice";


export const store = configureStore({
    reducer: {
        catalog: catalogReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().prepend(
            thunkMiddleware
        )
})

