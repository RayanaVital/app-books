import axios from "axios";

const favoritesApi = axios.create({
    baseURL: "http://localhost:8000/favorites",

});
async function getFavorites() {
    const response =  await favoritesApi.get("/");
    return response.data;
}

export  {
    getFavorites
};  