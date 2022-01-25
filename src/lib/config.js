export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const BASE_URL = 'http://www.omdbapi.com/?apikey=';
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
