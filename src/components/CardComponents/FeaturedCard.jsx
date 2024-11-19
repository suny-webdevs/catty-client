import PropTypes from "prop-types"

const FeaturedCard = ({ img, title, description }) => {
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  )
}

FeaturedCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default FeaturedCard
