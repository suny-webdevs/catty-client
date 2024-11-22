import axios from "axios"

export const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
})

const useAxios = () => {
  return axiosPublic
}

export default useAxios
