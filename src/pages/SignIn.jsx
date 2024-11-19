import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import toast from "react-hot-toast"

const SignIn = () => {
  const { userSignIn } = useAuth()
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault()
    try {
      const email = e.target.email.value
      const password = e.target.password.value
      await userSignIn(email, password)
      navigate("/", { replace: true })
      toast.success("Sign in successful!")
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className="container mx-auto mt10 md:mt-14">
      <div className="hero bg-base-200 min-h-screen px-5 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form
              onSubmit={handleSignIn}
              className="card-body"
            >
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

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="mb-5 mx-auto">
              <p>
                Don&apos;t have an account?{" "}
                <Link
                  to="/sign-up"
                  className="text-primary ml-1"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
