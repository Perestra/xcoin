import axios from "axios";

export const AwsomeAPI = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/',
    timeout: 1000
})