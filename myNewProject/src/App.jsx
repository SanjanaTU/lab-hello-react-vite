import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img1 from './images/ironhack-logo-xs.png/'
import img2 from './images/menu-top-xs.png'
import img3 from './images/icon1.png'
import img4 from './images/icon2.png'
import img5 from './images/icon3.png'
import img6 from './images/icon4.png'


function App() {
  
  return (
    <>
     <div className="App">
     <div className="content">
     <img src={img1} alt="logo" id='img1'/>
     <img id="menu" src={img2} alt="menu"/>
     
     <div id='infomation'>
     <div className="info">
          <h1>Say hello to<br/>ReactJS</h1>
          <p>You will learn how to use<br/>the most popular frontend library,<br/>and become a super Ninja developer</p>
          <button>Awesome!</button>
          </div>
          </div>
        </div>
        </div>
        <div id="icons">
        <div className="icons1">
          <div>
            <img src={img3} alt='icon1'/>
            <h1>Declarative</h1>
            <p>React makes it <br/>painles to create<br/> interactive UIs. </p>
          </div>
        </div>
        <div className="icons2">
          <div>
            <img src={img4} alt='icon2'/>
            <h1>Components</h1>
            <p>Build encapsulated<br/>components that<br/> manages their state. </p>
          </div>
        </div>
        <div className="icons3">
          <div>
            <img src={img5} alt='icon3'/>
            <h1>Single-Way</h1>
            <p>A set of immutable<br/>values are passed to<br/> the component's.</p>
          </div>
        </div>
        <div className="icons4">
          <div>
            <img src={img6} alt='icon4'/>
            <h1>JSX</h1>
            <p>Statically-typed.<br/>designed to run on<br/> modern browsers.</p>
          </div>
        </div>
        </div>
          </>
  )
}

export default App
