
import axios from 'axios';

var DEBUG = false

var hostUrl = "http://demo.local/"


const restClient = axios.create({
    baseURL: `${hostUrl}/wp-json`,
});

restClient.interceptors.request.use(request => {
    if (DEBUG) {
        console.log('Request:', request)
    }
    return request
});

restClient.interceptors.response.use(response => {
    if (DEBUG) {
        console.log('Response:', response)
    }
    
    return response

});


export { restClient }