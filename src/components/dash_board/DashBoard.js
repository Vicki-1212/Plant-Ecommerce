import AdSection from '../ad_section/AdSection'
import FooterSection from '../footer_section/FooterSection'
import Header from '../header_section/Header'
import ProductSection from '../product_section/ProductSection'
import SearchSection from '../search_section/SearchSection'
import SlideSection from '../slide_section/SlideSection'
import './DashBoard.css'

function DashBoard() {
  return (
    <>
        <AdSection />
        <Header />
        <div className="page-section-container">
          <SearchSection />
          <SlideSection />
          <ProductSection />
          <FooterSection />
        </div>
    </>
        
  )
}

export default DashBoard
