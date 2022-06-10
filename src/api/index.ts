import axios, { AxiosInstance } from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies()

const api:AxiosInstance = axios.create({ baseURL: "https://erikna-poertfolio-hellospring.azuremicroservices.io" })

api.interceptors.request.use((req) => {
    req.headers = {
        ...req.headers,
        Authorization: cookies.get('Authorization')
    }
    return req;
})

export default api;