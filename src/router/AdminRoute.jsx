import PropTypes from "prop-types"
import useRole from "../hooks/useRole"
import Loading from "../components/shared/Loading"
import { Navigate } from "react-router-dom"

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <Loading />
  if (role === "admin") return children

  return <Navigate to={"/"} />
}

AdminRoute.propTypes = {
  children: PropTypes.node,
}

export default AdminRoute
