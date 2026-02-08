import axios from "axios";

const API_URL = "https://lumoshive-api-furniture.vercel.app/api";

const getHeader = () => axios.get(`${API_URL}/header`);
const getdata = () => axios.get(`${API_URL}/data`);
const getCategories = () => axios.get(`${API_URL}/category`);
const getProducts = () => axios.get(`${API_URL}/products?page=1&limit=5`);
const getTestimoni = () => axios.get(`${API_URL}/testimonials?page=1&limit=1`);
const subscribeEmail = () => axios.post(`${API_URL}/subscribe`);


export {getHeader, getdata, getCategories, getProducts, getTestimoni, subscribeEmail}