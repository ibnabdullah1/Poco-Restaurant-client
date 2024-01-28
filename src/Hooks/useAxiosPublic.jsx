import axios from "axios";

const axiosSecurePublic = axios.create({
  baseURL: "https://poco-restaurant-server.vercel.app/",
});
const useAxiosPublic = () => {
  return axiosSecurePublic;
};

export default useAxiosPublic;
