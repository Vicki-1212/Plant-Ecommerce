import { CiHeart } from "react-icons/ci";
import {Link} from 'react-router-dom'

const ProductItem = (props) => {
    const {product, addToCart} = props
    const {id, img, name, rating, fixed_price, discounted_price} = product

    const onClickAddToCart = () => {
        addToCart(id)
    }
  return (
    <div className="product-card" key={id}>
        <div className="product-img-container">
            <CiHeart />
            <img src={img} alt={name} className="product-image" />
            <Link to="/thankyou" className="nav-link-view-product"><button className="view-product-button">View Product</button></Link>
        </div>
        <div className="product-details-container">
            <p className="product-name">{name}</p>
            <p className="product-description">Indoor Plant, Low maintenance</p>
            <div className="product-rating-container">
                <p>Rating:</p>
                <p className="product-rating">{rating}</p>
            </div>
            <div className="product-price-container">
                <p className="price-fixed-price">$ {fixed_price}</p>
                <p className="price-discount-price">$ {discounted_price}</p>
            </div>
            <div className="product-cart-button-container">
                <button className="add-to-cart-button" onClick={onClickAddToCart} > - Add to Cart + </button>
                <button className="buy-button">Buy on Rent</button>
            </div>
            
        </div>
    </div>
  )
}

export default ProductItem
