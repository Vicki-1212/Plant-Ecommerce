import ProductItem from "../product_item/ProductItem"
import "./ProductSection.css"
import { addItem } from "../../cart_slice/cartSlice"
import { useDispatch } from "react-redux"

const product = [
    {
        id: 1,
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729341771/ypiwzaizp8d9enzycvxq.svg',
        name: 'Product 1',
        fixed_price: 100,
        discounted_price: 80,
        rating: 4.3,
    },
    {
        id:2,
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729341901/is095dw3b10c90wjagvt.svg',
        name: 'Product 2',
        fixed_price: 200,
        discounted_price: 160,
        rating: 4.7,
    }, 
    {
        id: 3,
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729341956/uxtvuihvryu31yxcbqq3.svg',
        name: 'Product 3',
        fixed_price: 300,
        discounted_price: 240,
        rating: 4.5,
    }, 
    {
        id: 4,
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729341999/idf7m93sulnneh2hqvpu.svg',
        name: 'Product 4',
        fixed_price: 400,
        discounted_price: 320,
        rating: 4.2,
    },
    {
        id: 5,
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729342037/e4oguhlolotf0yojltlk.svg',
        name: 'Product 5',
        fixed_price: 500,
        discounted_price: 400,
        rating: 4.6,
    },
    {
        id: 6,
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729342082/c1fi2erffhmyl0wwb9bh.svg',
        name: 'Product 6',
        fixed_price: 600,
        discounted_price: 480,
        rating: 4.1,
    }, 
    {
        id: 7,
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729342126/jyrg3phcb1yx9zivvkl7.svg',
        name: 'Product 7',
        fixed_price: 700,
        discounted_price: 560,
        rating: 4.4,
    }, 
    {
        id: 8,
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729342166/nlhq1xijzueaflrvghur.svg',
        name: 'Product 8',
        fixed_price: 800,
        discounted_price: 640,
        rating: 4.0,
    },
    {
        id: 9,
        img: 'https://res.cloudinary.com/dtnwl3ron/image/upload/v1729342203/m34b2zy3y0rnxfrngu3y.svg',
        name: 'Product 9',
        fixed_price: 900,
        discounted_price: 720,
        rating: 4.8,
    }
]

const ProductSection = () => {

    const dispatch = useDispatch()

    const addToCart = (id) => {
        // eslint-disable-next-line array-callback-return
        product.map((eachProduct) => {
            if(eachProduct.id === id){
                dispatch(addItem(eachProduct))
            }
        })
    }


  return (
    <div className="product-section-container">
      <h1 className="product-section-heading">Products</h1>
      <div className="product-card-container">
        {product.map((eachProduct) => (
            <ProductItem  product={eachProduct} key={eachProduct.id} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default ProductSection
