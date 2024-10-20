import { useSelector } from "react-redux";
import AdSection from '../ad_section/AdSection'
import Header from '../header_section/Header'
import CartProduct from '../cartList/CartProduct';
import { removeItem } from "../../cart_slice/cartSlice";
import { useDispatch } from "react-redux";

import './cart.css'

const Cart = () => {
  const cartItem = useSelector((state) => state.cart);
  let total = 0;
  const dispatch = useDispatch()

  cartItem.forEach((item) => {
    total += item.discounted_price;
  })

  const deleteCartItem = (index) => {
    dispatch(removeItem(index))
  }

  return (
    <>
        <AdSection />
        <Header />
        <div className="cart-section-container">
            <h1 className="cart-heading">My Cart</h1>
            {cartItem.map((eachItem, index) => (
                <CartProduct cartListItem={eachItem} key={eachItem.id} deleteCartItem={deleteCartItem} index={index} />
            ))}
            <p className="total-cost">Total Cost: {total}</p>
        </div>
    </>
  )
}

export default Cart
