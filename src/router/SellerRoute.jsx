import PropTypes from "prop-types"
import useRole from "../hooks/useRole"
import Loading from "../components/shared/Loading"
import { Navigate } from "react-router-dom"

const SellerRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <Loading />
  if (role === "seller") return children

  return <Navigate to={"/"} />
}

SellerRoute.propTypes = {
  children: PropTypes.node,
}

export default SellerRoute
