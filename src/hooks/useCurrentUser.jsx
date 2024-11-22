import useAxios from "./useAxios"
import useAuth from "./useAuth"
import { useEffect, useState } from "react"

const useCurrentUser = () => {
  const axios = useAxios()
  const { user } = useAuth()
  const [userFromDb, setUserFromDb] = useState({})

  console.log(userFromDb)

  const loadData = async () => {
    const { data } = await axios.get(`/users/${user?.email}`)
    setUserFromDb(data.user)
  }

  useEffect(() => {
    loadData()
  }, [user?.email])

  return userFromDb
}

export default useCurrentUser
