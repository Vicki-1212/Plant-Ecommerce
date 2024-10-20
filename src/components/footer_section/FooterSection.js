import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './FooterSection.css'

const FooterSection = () => {
  return (
    <div className="footer-section-container">
        <div className="first-footer-container">
            <h1 className="first row-heading">SUBSCRIBE TO OUR NEWSLETTER</h1>
            <p className="first-row-description">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
            <input type="text" placeholder='Enter Your Email Address' className="email-input" />
            <button className="footer-section-button">SUBSCRIBE</button>
        </div>
        <div className="middle-container">
            <h1 className="first row-heading">CHAPERONE</h1>
            <p className="first-row-description">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
        </div>
        <div className="middle-container">
            <h1 className="first row-heading">Follow us on</h1>
            <div className="social-media-icons">
                <FaFacebookSquare size={20} />
                <FaInstagram size={20}/>
                <FaSquareThreads size={20} />
                <FaYoutube  size={20}/>
                <FaLinkedin  size={20}/>
            </div>
        </div>
    </div>
  )
}

export default FooterSection
