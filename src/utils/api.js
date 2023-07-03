import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTNlODViNzg0ODkzM2RiNTY3OTY0NTA5YTJiYzA1YyIsInN1YiI6IjY0N2RkYzRjMGUyOWEyMmJlMDhkZmY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s1X5P6eGx7i_QzmzZVkFrzj3A-Snu9owwATXFkmdMak"


// import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url,params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}