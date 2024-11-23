import useAxios from "../../../hooks/useAxios"
import toast from "react-hot-toast"
import useAuth from "../../../hooks/useAuth"

const AddProducts = () => {
  const axios = useAxios()
  const { user } = useAuth()

  const handleAddProduct = async (e) => {
    e.preventDefault()
    try {
      const form = e.target
      const name = form.name.value
      const category = form.category.value
      const price = form.price.value
      const stock = form.stock.value
      const description = form.description.value
      const images = form.image.value

      const { data } = await axios.post(`/create-product`, {
        sellerEmail: user?.email,
        name,
        category,
        price,
        stock,
        description,
        images,
      })
      if (data?.data?.insertedId) {
        toast.success(data?.message)
        form.reset()
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div>
      <h1 className="capitalize text-3xl font-bold">add products</h1>
      <div className="card bg-base-100 w-full shrink-0 mt-5">
        <form
          onSubmit={handleAddProduct}
          className="card-body grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
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
              placeholder="Category"
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
              placeholder="Price"
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
              placeholder="Stock"
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
              placeholder="Description"
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
              placeholder="Image URL"
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

export default AddProducts
