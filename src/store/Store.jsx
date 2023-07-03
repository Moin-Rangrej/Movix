import { configureStore } from "@reduxjs/toolkit";
import Homeslice from "../features/Homeslice";

export const store = configureStore({
    reducer:{
        Moviehome: Homeslice,
    },
})

