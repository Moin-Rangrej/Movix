import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    url: {},
    // movies category
    genres: {},
}

export const Homeslice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        getApiConfigration: (state,action) => {
            state.url = action.payload;
        },
        getGenres: (state,action) => {
            state.genres = action.payload;
        }
    }    
});

export const {getApiConfigration,getGenres} = Homeslice.actions;

export default Homeslice.reducer