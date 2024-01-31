import { Card } from "./components/Card"
import { Footer } from "./components/Footer"
import { Frame } from "./components/Frame"
import { Header } from "./components/Header"
import { Section } from "./components/Section"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Frame />

        <section className="card-sec">
          <h3 className="title-sec">Carros</h3>
          <div className="container-sec">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </div>
      <Section />
      <Footer />
    </>
  )
}

export default App
