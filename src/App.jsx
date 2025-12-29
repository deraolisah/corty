import './App.scss';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import Product from './pages/Product/Product';

function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/case-studies' element={<CaseStudies />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/:id' element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;