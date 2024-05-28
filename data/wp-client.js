
import axios from 'axios';

var DEBUG = true

const hostUrl = "http://demo.local"
const appPassword = "UkKH8OS0yb8LN0cRdTHC3W4E"
const appUsername = "admin"
const authHeader = btoa(`${appUsername}:${appPassword}`)

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

restClient.interceptors.request.use(request => {
    
    // add password to headers
    request.headers.Authorization = `Basic ${authHeader}`
    return request
});


export { restClient }