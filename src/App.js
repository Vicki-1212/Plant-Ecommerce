import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import DashBoard from './components/dash_board/DashBoard'
import ThankYouPage from './components/thankyou_page/ThankYouPage'
import Cart from './components/cart_page/Cart'


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/thankyou' element={<ThankYouPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
