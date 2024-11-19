import { Link, NavLink } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Navbar = () => {
  const { user, userSignOut } = useAuth()

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  )

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
                    alt="Tailwind CSS Navbar component"
                    src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1731683204~exp=1731686804~hmac=a101a306d4e167f4b8ef54dd9241264f161c2d3f0fda7751d7ef8b5611379aae&w=360"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-3 shadow"
              >
                <li>{user?.displayName}</li>
                <li className="mt-1">{user?.email}</li>
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
