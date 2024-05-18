
import Navbar from "./components/header/navbar/Navbar"
import LandingPage from "./pages/langingPage/LandingPage"
import Marquee from "./pages/marquee/Marquee"

const App = () => {
  return (
    <div className="w-full h-screen  text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
    </div>
  )
}

export default App

