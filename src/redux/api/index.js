import axios from 'axios';

const baseURL = 'http://www.omdbapi.com/?apiKey=ffd0c3a5';

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: baseURL + url,
    data,
    headers
});