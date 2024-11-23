import { useQuery } from "@tanstack/react-query"
import useAxios from "../../../hooks/useAxios"
import Loading from "../../../components/shared/Loading"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const Products = () => {
  const axios = useAxios()
  const navigate = useNavigate()
  const avatar =
    "https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?ga=GA1.1.571930160.1728748920&semt=ais_hybrid"

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("/products")
      return data?.products
    },
  })

  const handleUpdate = async (id) => {
    navigate(`/dashboard/products/${id}`)
  }

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/delete-product/${id}`)
      if (data?.data?.deletedCount > 0) {
        toast.success(data.message)
        refetch()
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  if (isLoading) return <Loading />

  return (
    <div>
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product?._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={product?.images || avatar}
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product?.name}</div>
                      <div className="text-sm opacity-50 capitalize">
                        {product?.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  ${product?.price}
                  {/* <br /> */}
                  {/* <span className="badge badge-ghost badge-sm"></span> */}
                </td>
                <td>{product?.stock}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(product?._id)}
                    type="button"
                    className="btn btn-xs btn-ghost text-success"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(product?._id)}
                    type="button"
                    className="btn btn-xs btn-ghost text-error"
                  >
                    Delete
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

export default Products
