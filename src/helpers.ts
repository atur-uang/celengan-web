import fetcher from 'axios';

export const axios = fetcher.create({
    baseURL: process.env.API_BASE_URL
})
