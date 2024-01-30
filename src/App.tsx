import { Card } from "./components/Card"
import { Frame } from "./components/Frame"
import { Header } from "./components/Header"

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
      <section>
        <div className="container">
          <div className="car-sec">
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
