import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import authSlice from "./slices/authSlice";
import { urlApi } from "./api/urlApi";
import { adminApi } from "./api/adminApi";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [urlApi.reducerPath]: urlApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(),
    authApi.middleware,
    userApi.middleware,
    urlApi.middleware,
    adminApi.middleware
    ]
})

export default reduxStore