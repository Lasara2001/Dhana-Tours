import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Packages from './components/Packages'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

function App() {
  // The popup state lives here so any section can open it
  const [booking, setBooking] = useState({ open: false, type: 'taxi' })

  const openBooking = (type) => setBooking({ open: true, type })
  const closeBooking = () => setBooking((prev) => ({ ...prev, open: false }))
  const changeType = (type) => setBooking((prev) => ({ ...prev, type }))

  return (
    <>
      <Navbar />
      <main>
        <Hero onBook={openBooking} />
        <Services />
        <Packages />
        <About />
        <Reviews />
        <Contact onBook={openBooking} />
      </main>
      <Footer />
      <BookingModal
        open={booking.open}
        type={booking.type}
        onTypeChange={changeType}
        onClose={closeBooking}
      />
    </>
  )
}

export default App