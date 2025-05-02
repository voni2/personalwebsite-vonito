import { useState } from 'react'
import Header from './Header'
import './App.css'
import Footer from './Footer'
import Selector from './assets/Hover-Selector.png'

function App() {
  /*Handles the Visibility of the Selector Gauntlet 1 when you hover over it */
  const [isHovered1, setIsHovered1] = useState(false);
  const handleMouseEnterS1 = () => {
    setIsHovered1(true);
  };
  const handleMouseLeaveS1 = () => {
    setIsHovered1(false);
  };
  const SelectorVisibility1 = isHovered1 ? 'visible' : 'hidden';

  /*Handles the Visibility of the Selector Gauntlet 2 when you hover over it */
  const [isHovered2, setIsHovered2] = useState(false);
  const handleMouseEnterS2 = () => {
    setIsHovered2(true);
  };
  const handleMouseLeaveS2 = () => {
    setIsHovered2(false);
  };
  const SelectorVisibility2 = isHovered2 ? 'visible' : 'hidden';

  /*Handles the Visibility of the Selector Gauntlet 3 when you hover over it */
  const [isHovered3, setIsHovered3] = useState(false);
  const handleMouseEnterS3 = () => {
    setIsHovered3(true);
  };
  const handleMouseLeaveS3 = () => {
    setIsHovered3(false);
  };
  const SelectorVisibility3 = isHovered3 ? 'visible' : 'hidden';

  /*Handles the Visibility of the Selector Gauntlet 4 when you hover over it */
  const [isHovered4, setIsHovered4] = useState(false);
  const handleMouseEnterS4 = () => {
    setIsHovered4(true);
  };
  const handleMouseLeaveS4 = () => {
    setIsHovered4(false);
  };
  const SelectorVisibility4 = isHovered4 ? 'visible' : 'hidden';


  return (
    <>
       <Header/>
 
 
  
    <div className='Menu'>
      <table>
      <tr>
      <th><img src={Selector}  style={{ visibility: SelectorVisibility1 }}/></th>
      <th> <img src={Selector} style={{ visibility: SelectorVisibility2 }}/></th>
      <th> <img src={Selector} style={{ visibility: SelectorVisibility3 }}/></th>
      <th> <img src={Selector} style={{ visibility: SelectorVisibility4 }}/></th>
      </tr>


      

      <tr>
       <th> <button onMouseEnter={handleMouseEnterS1} onMouseLeave={handleMouseLeaveS1}> Continue </button></th>
       <th> <button onMouseEnter={handleMouseEnterS2} onMouseLeave={handleMouseLeaveS2}> Character </button></th>
       <th>  <button onMouseEnter={handleMouseEnterS3} onMouseLeave={handleMouseLeaveS3}> Skills </button></th>
       <th>  <button onMouseEnter={handleMouseEnterS4} onMouseLeave={handleMouseLeaveS4}> About </button></th>
      </tr>

      </table>
    
    </div>

    
    <Footer/>
 
    </>
  )
}

export default App
