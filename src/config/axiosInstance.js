import axios from "axios";

const BASE_URL = "https://filesharebe.onrender.com/api/files/";
// const BASE_URL="/api/files/"
const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;

export default axiosInstance;
