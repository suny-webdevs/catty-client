import { Link, Outlet, useNavigate } from "react-router-dom"
import useRole from "../hooks/useRole"
import useAuth from "../hooks/useAuth"
import { HiBars3 } from "react-icons/hi2"
import useAxios from "../hooks/useAxios"
import toast from "react-hot-toast"

const DashboardLayout = () => {
  const { user, userSignOut } = useAuth()
  const [role] = useRole()
  const navigate = useNavigate()
  const axios = useAxios()

  const handleSignOut = async () => {
    await userSignOut()
    navigate("/", { replace: true })
  }

  const handleRequest = async () => {
    const { data } = await axios.post("/create-request", {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      status: "pending",
    })
    if (data.insertedId) {
      toast.success(data.message)
    }
  }

  const adminLinks = (
    <>
      <li>
        <Link to={"/dashboard/seller-request"}>Seller requests</Link>
      </li>
      <li>
        <Link to={"/dashboard/sellers"}>Sellers</Link>
      </li>
      <li>
        <Link to={"/dashboard/buyers"}>Buyers</Link>
      </li>
      <li>
        <Link to={"/dashboard/blocked-users"}>Blocked users</Link>
      </li>
      <li>
        <button
          onClick={handleSignOut}
          type="button"
          className="text-error"
        >
          Sign out
        </button>
      </li>
    </>
  )

  const sellerLinks = (
    <>
      <li>
        <Link to={"/dashboard/products"}>Products</Link>
      </li>
      <li>
        <Link to={"/dashboard/add-product"}>Add product</Link>
      </li>
      <li>
        <Link to={"/dashboard/orders"}>Orders</Link>
      </li>
      <li>
        <button
          onClick={handleSignOut}
          type="button"
          className="text-error"
        >
          Sign out
        </button>
      </li>
    </>
  )

  const buyerLinks = (
    <>
      <li>
        <Link to={"/dashboard/cart"}>Cart</Link>
      </li>
      <li>
        <Link to={"/dashboard/wishlist"}>Wishlist</Link>
      </li>

      {role === "buyer" && (
        <li className="mt-2">
          <button
            onClick={handleRequest}
            type="button"
            className="bg-success text-white hover:bg-success"
          >
            Be a seller
          </button>
        </li>
      )}
      <li>
        <button
          onClick={handleSignOut}
          type="button"
          className="text-error"
        >
          Sign out
        </button>
      </li>
    </>
  )

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <div className="w-full px-2 py-1 flex items-center justify-between border md:hidden">
            <h3 className="text-2xl font-bold">Catty</h3>
            <label
              htmlFor="my-drawer-2"
              className="drawer-button cursor-pointer"
            >
              <HiBars3 className="text-3xl" />
            </label>
          </div>

          <div className="min-h-screen flex-1 w-full p-2 md:p-8">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base text-base-content min-h-full w-80 p-4">
            <li>
              <Link
                to={"/"}
                className="uppercase font-bold text-lg"
              >
                Home
              </Link>
            </li>
            {role === "admin" && adminLinks}
            {role === "seller" && sellerLinks}
            {role === "buyer" && buyerLinks}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
