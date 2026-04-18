import BoatSection from './components/BoatSection'
import ContactSection from './components/ContactSection'
import Experiences from './components/Experiences'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import GallerySection from './components/GallerySection'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Navbar from './components/Navbar'
import ReasonsSection from './components/ReasonsSection'
import SocialSection from './components/SocialSection'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-ocean-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Experiences />
        <BoatSection />
        <GallerySection />
        <ReasonsSection />
        <SocialSection />
        <Testimonials />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
