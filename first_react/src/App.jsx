import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { Card } from "./components/card"
import './App.css'
function App() {

  return (
    <>
      <Navbar/>
      
      <div className="cards">
        <Card title="vasu" description="My name is vasu" />
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </>
  )
}

export default App
