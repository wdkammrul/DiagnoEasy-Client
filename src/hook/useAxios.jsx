import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://diagno-easy-server.vercel.app'
})

const useAxios = () => {
    return axiosPublic;
};

