import axios from "axios";


export const base_api = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com/users'
});