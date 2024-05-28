
import axios from 'axios';



var DEBUG = false

const hostUrl = "http://demo.local"
const appPassword = process.env.NEXT_PUBLIC_WP_APP_PASSWORD

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