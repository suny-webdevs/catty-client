import { useQuery } from "@tanstack/react-query"
import Loading from "../../../components/shared/Loading"
import useAxios from "../../../hooks/useAxios"

const BlockedUsers = () => {
  const axios = useAxios()
  const avatar =
    "https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?ga=GA1.1.571930160.1728748920&semt=ais_hybrid"

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["sellersRequests"],
    queryFn: async () => {
      const { data } = await axios.get("/users")

      return data?.users
    },
  })

  const blockedUsers = users.filter((user) => user.role === "")

  if (isLoading) return <Loading />

  return (
    <div>
      <h1 className="text-3xl font-bold">Blocked users</h1>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {blockedUsers.map((user) => (
              <tr key={user?._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user?.photo || avatar}
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                      <div className="text-sm opacity-50 capitalize">
                        {user?.role}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {user?.email}
                  <br />
                  <span className="badge badge-ghost badge-sm">Email</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BlockedUsers
