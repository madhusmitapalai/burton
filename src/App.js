import React from 'react'
import {useContext} from 'react'
import About from './components/About'
import Intro from './components/Intro'
import ProductList  from './components/ProductList'
//import Data from './components/Data'
import'../src/components/banner.css'
import Contact from './components/Contact'
import Toggle from './components/Toggle'
import {ThemeContext} from '../src/Context'
const App = () => {
  const theme=useContext(ThemeContext)
  const darkmode=theme.state.darkmode;
  return (
    <div   style={{backgroundColor:darkmode ?"#fff" : "black", Color: darkmode  && "white"}} >
    <Toggle/>
      <Intro />
      <About />
      <ProductList/>
      <Contact/>
    </div>
  )
}

export default App;
