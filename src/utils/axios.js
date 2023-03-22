import axios from "axios";

const headers = {
    'Content-Type': 'application/json'
  };

export const client = axios.create({
    baseURL: 'http://127.0.0.1:80/api/people',
    headers
})