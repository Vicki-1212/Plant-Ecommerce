import AdSection from '../ad_section/AdSection'
import Header from '../header_section/Header'
import {Link} from 'react-router-dom'
import './ThankYouPage.css'

const ThankYouPage = () => {
  return (
    <>
      <AdSection />
      <Header />
      <div className="thankyou-page-container">
          <h2 className="thankyou-page-top-heading">Your Cart</h2>
          <hr className="thankyou-page-top-line"/>
          <h1 className="thankyou-page-heading">Congratulations</h1>
          <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1729409302/v4rtg5pevwo7zfngbobu.png" alt="thankyou-plant" className="thankyou-page-image" />
          <p className="thankyou-page-description1">Thank you for choosing Chaperone services.</p>
          <p className="thankyou-page-description2">We will soon get in touch with you!</p>
          <Link to="/" className="nav-link-continue-shopping"><button className="thankyou-page-button">CONTINUE SHOPPING</button></Link>
      </div>
    </>
  )
}

export default ThankYouPage
