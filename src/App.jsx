import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Packages from './components/Packages'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Packages />
      </main>
    </>
  )
}

export default App