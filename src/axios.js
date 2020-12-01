import axios from 'axios';

const instance = axios.create({
  baseURL: "https://tinderappbackend.herokuapp.com"
});

export default instance;