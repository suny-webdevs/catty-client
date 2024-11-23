import { useQuery } from "@tanstack/react-query"
import Loading from "../../../components/shared/Loading"
import useAxios from "../../../hooks/useAxios"
import toast from "react-hot-toast"

const SellerReq = () => {
  const axios = useAxios()
  const avatar =
    "https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?ga=GA1.1.571930160.1728748920&semt=ais_hybrid"

  const { data: requests = [], isLoading } = useQuery({
    queryKey: ["sellersRequests"],
    queryFn: async () => {
      const { data } = await axios.get("/requests")

      return data?.requests
    },
  })

  const handleReqAccept = async (email) => {
    try {
      const { data } = await axios.patch(`/update-role/${email}`)
      if (data.modifiedCount > 0) {
        toast.success("Request accepted")
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleReqReject = async (email) => {
    try {
      const { data } = await axios.delete(`/delete-request/${email}`)
      if (data.deletedCount > 0) {
        toast.success(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  if (isLoading) return <Loading />

  return (
    <div>
      <h1 className="text-3xl font-bold">Seller requests</h1>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((user) => (
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
                      <div className="text-sm opacity-50 capitalize">Buyer</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user?.email}
                  <br />
                  <span className="badge badge-ghost badge-sm">Email</span>
                </td>
                <td className="badge badge-sm"></td>
                <td>
                  <button
                    onClick={() => handleReqAccept(user?.email)}
                    type="button"
                    className="btn btn-xs btn-ghost text-success"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReqReject(user?.email)}
                    type="button"
                    className="btn btn-xs btn-ghost text-error"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SellerReq
