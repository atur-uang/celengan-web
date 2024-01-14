import fetcher from 'axios';

export const axios = fetcher.create({
    baseURL: 'https://api.celengan.online'
})
