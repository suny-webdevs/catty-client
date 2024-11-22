import PropTypes from "prop-types"
import { FcGoogle } from "react-icons/fc"
import useAuth from "../../hooks/useAuth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import useAxios from "../../hooks/useAxios"

const GoogleSignUpIn = ({ sign }) => {
  const { signUpInGoogle } = useAuth()
  const navigate = useNavigate()
  const axios = useAxios()

  const handleGoogleLogin = async () => {
    try {
      const { user } = await signUpInGoogle()
      if (!user) {
        return toast.error("User not found!")
      }

      const userInfo = {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL || "",
        role: "buyer",
      }

      const { data } = await axios.post("/create-user", userInfo)
      console.log(data)
      if (data?.postUser?.insertedId) {
        navigate("/", { replace: true })
        toast.success(data?.message)
      } else {
        toast.error("User could not created!")
      }
    } catch (error) {
      console.log(error)
      toast.error(error?.message)
    }
  }

  return (
    <div className="w-full flex items-center justify-center">
      <button
        onClick={handleGoogleLogin}
        type="button"
        className="bg-[#146efe] hover:bg-[#4285f4] p-[1px] text-white flex items-center gap-3"
      >
        <span className="bg-white p-2">
          <FcGoogle className="text-2xl" />
        </span>
        <span className="px-4">Sign {sign} with google </span>
      </button>
    </div>
  )
}

GoogleSignUpIn.propTypes = {
  sign: PropTypes.string,
}

export default GoogleSignUpIn
