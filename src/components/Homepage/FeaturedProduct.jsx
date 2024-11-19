import FeaturedCard from "../CardComponents/FeaturedCard"

const FeaturedProduct = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 px-5 md:px-0">
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
    </div>
  )
}

export default FeaturedProduct
