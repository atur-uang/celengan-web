import fetcher from 'axios';

export const axios = fetcher.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true
})
