import axios from 'axios'

const instance = axios.create({
    //The API (Cloud function) URL
    // baseURL: 'http://127.0.0.1:5001/clone-c32e4/us-central1/api'
    baseURL: 'https://us-central1-vijaytrialproject.cloudfunctions.net/api'
})

export default instance