import './App.css'
import ThreeScene from './ThreeScene'

function App() {
  return (
    <div className="app-container">
      <div className="canvas-wrap">
        <ThreeScene />
      </div>
      <div className="overlay">
        <div className="overlay-inner">
          <h1 className="brand">Your 3D Brand</h1>
          <p className="tagline">Interactive 3D experiences for the web.</p>
          <div className="cta-row">
            <a className="btn primary" href="#work">See Work</a>
            <a className="btn ghost" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
