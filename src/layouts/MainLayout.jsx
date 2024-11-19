import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar"
import Footer from "../components/shared/Footer"

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
      {/* Footer */}
    </div>
  )
}

export default MainLayout
