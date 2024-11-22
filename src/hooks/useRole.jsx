import useAxios from "./useAxios"
import useAuth from "./useAuth"
import { useQuery } from "@tanstack/react-query"

const useRole = () => {
  const axios = useAxios()
  const { user, loading } = useAuth()

  const { data: role = {}, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading || !!user?.email,
    queryFn: async () => {
      const { data } = await axios.get(`/users/${user?.email}`)
      return data?.user?.role
    },
  })

  return [role, isLoading]
}

export default useRole
