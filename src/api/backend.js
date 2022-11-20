import axios from 'axios';

export default axios.create({
  baseURL: 'https://defikarte-backend-staging.azurewebsites.net/api/',
  headers: {
    'x-functions-clientid': 'defikarte-app',
    'x-functions-key': '',
  }
})