import { useQuery } from "@tanstack/react-query"
import FeaturedCard from "../CardComponents/FeaturedCard"
import useAxios from "../../hooks/useAxios"
import Loading from "../shared/Loading"

const FeaturedProduct = () => {
  const axios = useAxios()

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: async () => {
      const { data } = await axios.get("/products")
      return data?.products
    },
  })

  if (isLoading) return <Loading />

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-0">
      {products.map((product) => (
        <FeaturedCard
          key={product._id}
          image={product?.images}
          name={product?.name}
          price={product?.price}
          category={product?.category}
          description={product?.description}
        />
      ))}
    </div>
  )
}

export default FeaturedProduct
