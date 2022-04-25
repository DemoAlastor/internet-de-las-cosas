import axios from "axios";
axios.defaults.withCredentials = true

const httpClient = axios.create({
    baseURL: 'http://localhost:2000',
    timeout: 3000,
    headers: {
       "Content-Type": "application/json"
    }
})

export default httpClient;