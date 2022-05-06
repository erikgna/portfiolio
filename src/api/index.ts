import axios, { AxiosInstance } from "axios";

const api:AxiosInstance = axios.create({ baseURL: "https://localhost:8080" })

api.interceptors.request.use((req) => {
    return req;
})

export default api;