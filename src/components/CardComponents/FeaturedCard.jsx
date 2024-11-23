import PropTypes from "prop-types"
import useRole from "../../hooks/useRole"
import Loading from "../shared/Loading"
import toast from "react-hot-toast"
import useAxios from "../../hooks/useAxios"
import useAuth from "../../hooks/useAuth"

const FeaturedCard = ({ image, name, category, price, description }) => {
  const [role, isLoading] = useRole()
  const axios = useAxios()
  const { user } = useAuth()

  const handleWishlist = async () => {
    if (role !== "buyer") {
      return toast.error("You are not buyer")
    }

    try {
      const { data } = await axios.post("/create-wishlist", {
        buyerEmail: user?.email,
        image,
        name,
        category,
        price,
      })
      if (data?.data?.insertedId) {
        toast.success(data?.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleCart = async () => {
    if (role !== "buyer") {
      return toast.error("You are not buyer")
    }

    try {
      const { data } = await axios.post("/create-cart", {
        buyerEmail: user?.email,
        image,
        name,
        category,
        price,
      })
      if (data?.data?.insertedId) {
        toast.success(data?.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  if (isLoading) return <Loading />

  return (
    <div>
      <div className="card bg-base-100 w-full shadow-xl">
        <figure className="w-full h-52">
          <img
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body h-72">
          <div>
            <div>{category}</div>
          </div>
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p className="font-bold">Price: ${price}</p>
          <div className="flex items-center justify-between mt-3">
            <button
              onClick={handleWishlist}
              type="button"
              className="btn btn-sm btn-ghost text-info"
            >
              Wishlist
            </button>
            <button
              onClick={handleCart}
              type="button"
              className="btn btn-sm btn-ghost text-success"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FeaturedCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
}

export default FeaturedCard
