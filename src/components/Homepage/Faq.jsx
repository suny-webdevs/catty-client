const Faq = () => {
  return (
    <div className="container mx-auto">
      <div className="collapse collapse-plus bg-base-200">
        <input
          type="radio"
          name="my-accordion-3"
          defaultChecked
        />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input
          type="radio"
          name="my-accordion-3"
        />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input
          type="radio"
          name="my-accordion-3"
        />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

export default Faq
