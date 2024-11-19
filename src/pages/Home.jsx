import { Helmet } from "react-helmet-async"
import Banner from "../components/Homepage/Banner"
import FeaturedProduct from "../components/Homepage/FeaturedProduct"
import UserReview from "../components/Homepage/UserReview"
import Faq from "../components/Homepage/Faq"

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="space-y-10 md:space-y-14">
        <Banner />
        <h1 className="text-3xl font-bold text-center">Featured Products</h1>
        <FeaturedProduct />
        <h1 className="text-3xl font-bold text-center">User Reviews</h1>
        <UserReview />
        <h1 className="text-3xl font-bold text-center">FAQ</h1>
        <Faq />
      </div>
    </div>
  )
}

export default Home
