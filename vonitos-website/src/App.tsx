import { useState } from 'react'
import Header from './Header'
import './App.css'

function App() {
 

  return (
    <>
    <Header></Header>

    <div className = "Menu">
        <button> Continue </button>
        <button> Character </button>
        <button> Skills </button>
        <button> About </button>
    </div>

    

 
    </>
  )
}

export default App
