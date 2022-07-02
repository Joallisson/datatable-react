import axios from "axios";


export const base_api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
    //baseURL : 'http://jsonplaceholder.typicode.com/users'
});