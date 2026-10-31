import './index.css'
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="font-heading text-4xl text-gold md:text-6xl">
        Dhana Tours
      </h1>
      <p className="text-center text-gray-300">Your trusted travel partner</p>
      <button className="rounded-full bg-gold px-6 py-3 font-semibold text-navy hover:bg-gold-light">
        Taxi Booking
      </button>
    </div>
  )
}

export default App