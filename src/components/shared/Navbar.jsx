import { Link, NavLink } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import useRole from "../../hooks/useRole"
import Loading from "./Loading"

const Navbar = () => {
  const { user, userSignOut } = useAuth()
  const [role, isLoading] = useRole()
  const avatar =
    "https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?ga=GA1.1.571930160.1728748920&semt=ais_hybrid"

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/products"}>Products</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  )

  if (isLoading) return <Loading />

  return (
    <div className="bg-slate-500 text-white">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="text-3xl font-bold font-mono uppercase"
          >
            catty
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User logo"
                    src={user?.photoURL || avatar}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-3 shadow"
              >
                <div className="bg-gray-200 p-3 rounded-box">
                  <li className="font-bold">{user?.displayName}</li>
                  <li>{user?.email}</li>
                  <li className="capitalize">{role}</li>
                </div>
                <li className="mt-2">
                  <Link to={`/dashboard`}>Dashboard</Link>
                </li>
                <li className="mt-3">
                  <button
                    type="button"
                    onClick={() => userSignOut()}
                    className="btn btn-sm btn-error"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to={"/sign-in"}
                className="text-base px-5 py-2 border border-white rounded"
              >
                Sign In
              </Link>
              <Link
                to={"/sign-up"}
                className="text-base px-5 py-2 bg-white rounded text-black border border-white"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
