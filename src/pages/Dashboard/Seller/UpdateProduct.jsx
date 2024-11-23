import { useLoaderData, useNavigate } from "react-router-dom"
import useAxios from "../../../hooks/useAxios"
import toast from "react-hot-toast"

const UpdateProduct = () => {
  const { product } = useLoaderData()
  const axios = useAxios()
  const navigate = useNavigate()

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const form = e.target
      const name = form.name.value
      const category = form.category.value
      const price = form.price.value
      const stock = form.stock.value
      const description = form.description.value
      const images = form.image.value

      const { data } = await axios.put(`/update-product/${product._id}`, {
        name,
        category,
        price,
        stock,
        description,
        images,
      })
      if (data?.data?.modifiedCount > 0) {
        toast.success(data?.message)
        navigate(-1)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Update</h1>
      <div className="card bg-base-100 w-full shrink-0 mt-5">
        <form
          onSubmit={handleUpdate}
          className="card-body grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={product?.name}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={product?.category}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              defaultValue={product?.price}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Stock</span>
            </label>
            <input
              type="number"
              name="stock"
              defaultValue={product?.stock}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={product?.description}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="image"
              defaultValue={product?.images}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6 md:col-span-2">
            <button className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProduct
