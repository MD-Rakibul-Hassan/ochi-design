
import Navbar from "./components/header/navbar/Navbar"
import LandingPage from "./pages/langingPage/LandingPage"
import Marquee from "./pages/marquee/Marquee"
import About from "./pages/about/About"
import PlayableEyes from "./pages/playableEyes/PlayableEyes"
const App = () => {
  return (
    <div className="w-full h-screen  text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <PlayableEyes />
    </div>
  )
}

export default App

