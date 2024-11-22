import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import toast from "react-hot-toast"
import GoogleSignUpIn from "../components/shared/GoogleSignUpIn"

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
    <div className="container mx-auto mt-10 md:mt-14">
      <div className="card bg-base-100 w-full shrink-0 px-3 flex items-center justify-center">
        <form
          onSubmit={handleSignIn}
          className="card-body w-full md:max-w-xl"
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
        <p className="uppercase">or</p>
        <div className="mt-8">
          <GoogleSignUpIn sign={"in"} />
          <div className="my-5 mx-auto">
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
  )
}

export default SignIn
