import { useState } from 'react'
import Header from './Header'
import './App.css'
import Footer from './Footer'

function App() {
 

  return (
    <>
       <Header/>
 
 
  
    <div className = "Menu">
        <button> Continue </button>
        <button> Character </button>
        <button> Skills </button>
        <button> About </button>
    </div>

    
    <Footer/>
 
    </>
  )
}

export default App
