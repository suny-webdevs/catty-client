import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const SignUp = () => {
  const { userSignUp, userUpdate, userSignOut } = useAuth()
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const name = e.target.name.value
      const email = e.target.email.value
      const password = e.target.password.value
      const confirmPassword = e.target.confirmPassword.value

      if (password !== confirmPassword) {
        return toast.error("Password did not match!")
      }
      console.log({ name, email, password })

      await userSignUp(email, password)
      await userUpdate(name)
      await userSignOut()
      toast.success("Sign up successfully!")
      navigate("/sign-in", { replace: true })
    } catch (error) {
      console.log(error)

      if (error.message.includes("email-already-in-use")) {
        toast.error("User already exist!")
      } else {
        toast.error("Something went wrong!")
      }
    }
  }

  return (
    <div className="container mx-auto mt10 md:mt-14">
      <div className="hero bg-base-200 min-h-screen px-5 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form
              onSubmit={handleSignUp}
              className="card-body"
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
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mb-5 mx-auto">
              <p>
                Already have an account?{" "}
                <Link
                  to="/sign-in"
                  className="text-primary ml-1"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
