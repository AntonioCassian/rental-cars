import { Card } from "./components/Card"
import { Frame } from "./components/Frame"
import { Header } from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Frame />

        <section className="">
          <h3>Carros</h3>
          <div className="container-sec">
            <Card />

          </div>

        </section>

      </div>
    </>
  )
}

export default App
