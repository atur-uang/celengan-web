import fetcher from 'axios';

export const axios = fetcher.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true
})
