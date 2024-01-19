import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL;

const instance = axios.create({
    // baseURL: "http://localhost:3000/api",
    baseURL: `${URL}/api`,
    withCredentials: true,
})

export default instance;

// || "http://localhost:3000/api"