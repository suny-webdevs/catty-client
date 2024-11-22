import { Link } from "react-router-dom"
import useRole from "../../hooks/useRole"

const DashNav = () => {
  const [role] = useRole()

  const adminLinks = (
    <>
      <li>
        <Link to={"/dashboard"}>Seller requests</Link>
      </li>
      <li>
        <Link to={"/dashboard/sellers"}>Sellers</Link>
      </li>
      <li>
        <Link to={"/dashboard/buyers"}>Buyers</Link>
      </li>
    </>
  )

  const sellerLinks = (
    <>
      <li>
        <Link to={"/dashboard"}>Products</Link>
      </li>
      <li>
        <Link to={"/dashboard/add-product"}>Add product</Link>
      </li>
      <li>
        <Link to={"/dashboard/orders"}>Orders</Link>
      </li>
    </>
  )

  const buyerLinks = (
    <>
      <li>
        <Link to={"/dashboard"}>Cart</Link>
      </li>
      <li>
        <Link to={"/dashboard/wishlist"}>Wishlist</Link>
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
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {role === "admin" && adminLinks}
            {role === "seller" && sellerLinks}
            {role === "buyer" && buyerLinks}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashNav
