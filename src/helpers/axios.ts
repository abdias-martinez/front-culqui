import axios from 'axios';

// SERVDIOR 
export const server = process.env.VUE_APP_BACKEND_URL;
const baseURL = `${server}/dev`;

const axiosApi = axios.create({ baseURL });

export const axiosConToken = async (endpoint: string, data: any = null, method = 'GET') => {
    const url = `${baseURL}${endpoint}`;
    const tokenCommerce = await localStorage.getItem('c-token') || '';

    if (method === 'GET') {
        const config = {
            method,
            url,
            headers: {
                'Content-type': 'application/json',
                'c-token': tokenCommerce,
                'x-token': data
            }
        };
        return axios(config).then(({data}) => {
            return data;
        }).catch(({ response }) => {
            return response;
        });
    } else {
        const config = {
            method,
            url,
            headers: {
                'Content-type': 'application/json',
                'c-token': tokenCommerce
            },
            data
        };
        return axios(config).then(({data}) => {
            return data;
        }).catch(({ response }) => {
            return response;
        });
    }
}

export default axiosApi;
