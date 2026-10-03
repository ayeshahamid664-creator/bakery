import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cakes from './pages/Cakes'
import Brownies from './pages/Brownies'
import TreatBoxes from './pages/TreatBoxes'
import Baskets from './pages/Baskets'
import TreatsDesserts from './pages/TreatsDesserts'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/brownies" element={<Brownies />} />
          <Route path="/treat-boxes" element={<TreatBoxes />} />
          <Route path="/baskets" element={<Baskets />} />
          <Route path="/treats-desserts" element={<TreatsDesserts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App