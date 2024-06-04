import axios from 'axios';

const BASE_URL = 'https://gjjsp-sis.software'

export default axios.create({
    baseURL: BASE_URL
})


export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type' : 'application/json'
    },
    withCredentials: true
})