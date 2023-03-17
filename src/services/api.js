import axios from "axios";

export const api = axios.create({
  baseURL: 'https://mynotes-api-ten.vercel.app'
});