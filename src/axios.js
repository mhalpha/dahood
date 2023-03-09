import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "https://dahood.herokuapp.com/api/",
    withCredentials: true,
})