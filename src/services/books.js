import axios from "axios";



const booksApi = axios.create({
    baseURL: "http://localhost:8000/books",

});
function getBooks() {
    const response =  booksApi.get("/");
    return response.data;
}

export  {
    getBooks
};  