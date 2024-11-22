import PropTypes from "prop-types"
import useRole from "../hooks/useRole"
import Loading from "../components/shared/Loading"
import { Navigate } from "react-router-dom"

const BuyerRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <Loading />
  if (role === "buyer") return children

  return <Navigate to={"/"} />
}

BuyerRoute.propTypes = {
  children: PropTypes.node,
}

export default BuyerRoute
