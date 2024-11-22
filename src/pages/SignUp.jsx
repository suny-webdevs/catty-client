import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import GoogleSignUpIn from "../components/shared/GoogleSignUpIn"
import useAxios from "../hooks/useAxios"

const SignUp = () => {
  const { userSignUp, userUpdate, userSignOut } = useAuth()
  const navigate = useNavigate()
  const axios = useAxios()

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const name = e.target.name.value
      const email = e.target.email.value
      const photo = e.target.photo.value
      const password = e.target.password.value
      const confirmPassword = e.target.confirmPassword.value

      if (password !== confirmPassword) {
        return toast.error("Password did not match!")
      }
      console.log({ name, email, password })

      await userSignUp(email, password)
      await userUpdate(name, photo)
      await userSignOut()

      const { data } = await axios.post("/create-user", {
        name,
        email,
        photo,
        role: "buyer",
      })
      if (data.success) {
        navigate("/sign-in", { replace: true })
        toast.success("Sign up successfully!")
      }
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
    <div className="container mx-auto mt-10 md:mt-14">
      <div className="card bg-base-100 w-full shrink-0 flex items-center justify-center">
        <form
          onSubmit={handleSignUp}
          className="card-body w-full md:max-w-xl"
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
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
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
        <p className="uppercase">or</p>
        <div className="mt-8">
          <GoogleSignUpIn sign={"up"} />
          <div className="my-5 mx-auto">
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
  )
}

export default SignUp
