import axios from "axios"

const URL = 'https://dummyjson.com/'

const api = axios.create({
    baseURL: URL
})

export default api


