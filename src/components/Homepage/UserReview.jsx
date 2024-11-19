import ReviewCard from "../CardComponents/ReviewCard"

const UserReview = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 px-5 md:px-0">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  )
}

export default UserReview
