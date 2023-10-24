import "./App.css"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import Footer from "./components/footer"

function App() {
  return (
    <div className="dark:bg-gray-900 flex flex-col">
      <Navbar />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
