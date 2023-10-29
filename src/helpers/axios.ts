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
                'Authorization': tokenCommerce,
                'X-Amz-Security-Token': data
            }
        };
        return axios(config).then(({data}) => {
            return data;
        }).catch(({ response }) => {
            return response;
        });
    } else {
        console.log(data)
        const config = {
            method,
            url,
            headers: {
                'Content-type': 'application/json',
                'Authorization': tokenCommerce
            },
            data
        };
        return axios(config).then(({data}) => {
            console.log(data)
            return data;
        }).catch(({ response }) => {
            console.log(response)
            return response;
        });
    }
}

export default axiosApi;
