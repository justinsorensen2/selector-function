import React, { useState } from 'react'
import Header from './components/Header'
import Display from './components/Display'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  const [hue, setHue] = useState(Math.round(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.round(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.round(Math.random() * 100))
  const [alpha, setAlpha] = useState(Math.random())

  const hueTracker = (e) => {
    const h = e.target.value
    setHue(h)
    console.log(h)
  }

  const saturationTracker = (e) => {
    const s = e.target.value
    setSaturation(s)
    console.log(s)
  }

  const lightnessTracker = (e) => {
    const l = e.target.value
    setLightness(l)
    console.log(l)
  }

  const alphaTracker = (e) => {
    const a = e.target.value
    setAlpha(a)
    console.log(a)
  }

  const randomize = () => {
    setHue(Math.round(Math.random() * 360))
    setSaturation(Math.round(Math.random() * 100))
    setLightness(Math.round(Math.random() * 100))
    setAlpha(Math.random())
  }
  const textBackgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
  return (
    <Router>
      <Header></Header>
      <main>
        <Display
          hue={hue}
          saturation={saturation}
          lightness={lightness}
          alpha={alpha}
        />
        <ul className="Sliders">
          <li className="Slider">
            <h3>H</h3>
            <input
              onChange={hueTracker}
              type="range"
              className="Hue"
              name="hue"
              value={hue}
              min="0"
              max="360"
            ></input>
          </li>
          <li className="Slider">
            <h3>S</h3>
            <input
              onChange={saturationTracker}
              type="range"
              className="Saturation"
              name="saturation"
              value={saturation}
              min="0%"
              max="100%"
            ></input>
          </li>
          <li className="Slider">
            <h3>L</h3>
            <input
              onChange={lightnessTracker}
              type="range"
              className="Lightness"
              name="lightness"
              value={lightness}
              min="0%"
              max="100%"
            ></input>
          </li>
          <li className="Slider">
            <h3>A</h3>
            <input
              onChange={alphaTracker}
              type="range"
              className="Alpha"
              name="alpha"
              value={alpha}
              min="0"
              max="1"
              step="0.1"
            ></input>
          </li>
          <li className="Randomize">
            <button onClick={randomize}>Randomize</button>
          </li>
        </ul>
      </main>
      <footer>
        <h3>{textBackgroundColor}</h3>
      </footer>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={Page}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
