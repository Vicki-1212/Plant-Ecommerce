import { IoSearchOutline } from "react-icons/io5";


import './SearchSection.css'

const SearchSection = () => {
  return (
    <div className="search-section-container">
        <div className="search-container">
            <IoSearchOutline className="search-icon" />
            <input type="text" placeholder="Search for a product" className="search-input" />
            <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1729334081/a0nyzbjj6bzztodbyxjn.svg" alt="plant logo" className="plant-logo" />
        </div>
        <div className="plants-description-container">
            <div className="plants-media-button">
                <button className="plant-button">Plants</button>
                <button className="post-button">Pots</button>
            </div>
            <p className="plant-description">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
        </div>
    </div>
  )
}

export default SearchSection
