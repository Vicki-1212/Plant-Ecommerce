import './SlideSection.css'

const plants = [
    {
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729339678/mrx3nnye6ombc5902k4y.png'
    },
    {
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729339796/djvh3nymxdqoizf0ogvo.png'
    },
    {
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729339858/krbuix1rvimf3j4tgadf.png'
    },
    {
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729339910/akcu57zgxdhv5hn8yxz1.png'
    },
    {
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729339910/akcu57zgxdhv5hn8yxz1.png'
    },
    {
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729340016/vsmr3ugqdudjuflp9nuj.png'
    }
]

const SlideSection = () => {
  return (
    <div className="slide-section-container">
      <h1 className="slide-section-heading">Nursery</h1>
      <div className="slide-plant-container">
        {plants.map((eachPlant, index) => (
            <div className="plant-card-container" key={index}>
                <img src={eachPlant.img} alt="plants-slide" className="slide-plant-image" />
                <p className="slide-plant-description">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default SlideSection
