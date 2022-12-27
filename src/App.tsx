import React, { useState , useEffect} from 'react'
import './App.css'
import Navone from './components/navBar'
import Dash from './components/dashBoard'


function App() {


  return (
    <div className="App">
      <Navone/>
      <Dash/>
    </div>
  )
}



export default App
