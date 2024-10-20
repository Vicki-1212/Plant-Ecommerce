import { MdDelete } from "react-icons/md";


const CartProduct = (props) => {
    const {cartListItem, deleteCartItem, index} = props
    const {id, img , name, discounted_price} = cartListItem

    const onClickDeleteButton = () => {
      deleteCartItem(index)
    }

  return (
    <div className="cart-details-container" key={id}>
        <div className="cart-product-image-name-container">
            <img src={img} alt=""  className="cart-product-image"/>
            <p className="cart-product-name">{name}</p>
        </div>
        <p className="cart-product-price">{discounted_price}</p>
        <button className="cart-product-delete-button" onClick={onClickDeleteButton}><MdDelete size={20} /></button>
    </div>
  )
}

export default CartProduct;
